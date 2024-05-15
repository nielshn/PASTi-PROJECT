package controllers

import (
	"encoding/base64"
	"errors"
	"fmt"
	"go-media-service/database"
	"go-media-service/models"
	"io/ioutil"
	"os"
	"path/filepath"
	"strconv"
	"strings"
	"time"

	"github.com/gofiber/fiber/v2"
)

// GetAll mengambil semua media
func GetAll(ctx *fiber.Ctx) error {
	var media []models.Media
	database.DB.Find(&media)
	return ctx.JSON(fiber.Map{
		"status": "success",
		"data":   media,
	})
}

// Create membuat media baru
func Create(ctx *fiber.Ctx) error {
	media := new(models.Media)
	if err := ctx.BodyParser(media); err != nil {
		return err
	}

	// Extract base64 data dari URI
	imageData := media.Image
	imageData = strings.Replace(imageData, "data:image/jpeg;base64,", "", 1)
	imageData = strings.Replace(imageData, "data:image/png;base64,", "", 1)

	// Decode gambar base64
	decoded, err := base64.StdEncoding.DecodeString(imageData)
	if err != nil {
		return errors.New("data gambar base64 tidak valid")
	}

	// Pastikan direktori upload ada
	if err := ensureUploadDirectory(); err != nil {
		return err
	}

	// Membuat nama file unik berdasarkan timestamp saat ini
	filename := strconv.FormatInt(time.Now().UnixNano(), 10) + ".jpg"

	// Simpan gambar ke file
	filePath := filepath.Join("uploads", filename)
	if err := ioutil.WriteFile(filePath, decoded, 0644); err != nil {
		return errors.New("tidak dapat menyimpan gambar ke file")
	}

	// Mengambil nilai host dan port dari variabel lingkungan
	host := os.Getenv("DB_HOST")
	port := os.Getenv("PORT")

	// Membuat URL lengkap untuk gambar
	imageURL := fmt.Sprintf("%s:%s/uploads/%s", host, port, filename)
	media.Image = imageURL

	err = database.DB.Create(&media).Error
	if err != nil {
		return err
	}

	return ctx.JSON(fiber.Map{
		"status": "success",
		"data": fiber.Map{
			"id":    media.ID,
			"image": media.Image,
		},
	})
}

// Update memperbarui media
func Update(ctx *fiber.Ctx) error {
	id := ctx.Params("id")
	media := new(models.Media)

	if err := ctx.BodyParser(media); err != nil {
		return err
	}

	var existingMedia models.Media
	if err := database.DB.First(&existingMedia, id).Error; err != nil {
		return errors.New("media tidak ditemukan")
	}

	// Decode gambar base64
	imageData, err := base64.StdEncoding.DecodeString(media.Image)
	if err != nil {
		return errors.New("data gambar base64 tidak valid")
	}

	// Pastikan direktori upload ada
	if err := ensureUploadDirectory(); err != nil {
		return err
	}

	// Membuat nama file unik berdasarkan timestamp saat ini
	filename := strconv.FormatInt(time.Now().UnixNano(), 10) + ".jpg"

	// Simpan gambar ke file
	filePath := filepath.Join("uploads", filename)
	if err := ioutil.WriteFile(filePath, imageData, 0644); err != nil {
		return errors.New("tidak dapat menyimpan gambar ke file")
	}

	// Mengambil nilai host dan port dari variabel lingkungan
	host := os.Getenv("DB_HOST")
	port := os.Getenv("PORT")

	// Membuat URL lengkap untuk gambar
	imageURL := fmt.Sprintf("%s:%s/uploads/%s", host, port, filename)
	media.Image = imageURL

	database.DB.Model(&existingMedia).Updates(&media)
	return ctx.JSON(fiber.Map{
		"status":  "success",
		"message": "Media berhasil diperbarui",
		"data":    existingMedia,
	})
}

// Delete menghapus media
func Delete(ctx *fiber.Ctx) error {
	id := ctx.Params("id")
	var media models.Media

	// Mencari media berdasarkan ID
	if err := database.DB.First(&media, id).Error; err != nil {
		return ctx.Status(404).JSON(fiber.Map{
			"status":  "error",
			"message": "Media not found",
		})
	}

	// Menghapus file media dari sistem file
	err := os.Remove("uploads/" + filepath.Base(media.Image))
	if err != nil {
		return ctx.Status(400).JSON(fiber.Map{
			"status":  "error",
			"message": err.Error(),
		})
	}

	// Menghapus data media dari basis data
	database.DB.Delete(&media, id)

	return ctx.JSON(fiber.Map{
		"status":  "success",
		"message": "Media berhasil dihapus",
	})
}

// ensureUploadDirectory memastikan direktori upload ada
func ensureUploadDirectory() error {
	uploadDir := "uploads"
	if _, err := os.Stat(uploadDir); os.IsNotExist(err) {
		if err := os.Mkdir(uploadDir, 0755); err != nil {
			return err
		}
	}
	return nil
}
