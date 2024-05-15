package main

import (
	"github.com/gofiber/fiber/v2"
	"go-media-service/database"
	"go-media-service/routes"
	"log"
	"os"
)

func main() {
	database.Connect()
	app := fiber.New()
	port := os.Getenv("PORT")
	routes.SetUp(app)

	err := app.Listen(":" + port)
	if err != nil {
		log.Fatalf("Gagal memulai server: %v", err)
	}

}
