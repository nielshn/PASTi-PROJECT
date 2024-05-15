package database

import (
	"fmt"
	"os"

	"go-media-service/models"

	"github.com/joho/godotenv"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

// Connect initializes database connection
func Connect() {
	errEnv := godotenv.Load() // Load environment variables from .env file
	if errEnv != nil {
		panic("Failed to load env file")
	}

	// Retrieve database credentials from environment variables
	dbUser := os.Getenv("DB_USER")
	dbPass := os.Getenv("DB_PASS")
	dbHost := os.Getenv("DB_HOST")
	dbName := os.Getenv("DB_NAME")

	// Construct database connection string using environment variables
	dsn := fmt.Sprintf("%s:%s@tcp(%s:3306)/%s?charset=utf8&parseTime=True&loc=Local", dbUser, dbPass, dbHost, dbName)

	conn, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("Could not connect to the database")
	}

	DB = conn

	// Automatically migrate the Media model
	conn.AutoMigrate(&models.Media{})
}
