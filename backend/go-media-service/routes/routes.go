package routes

import (
	"github.com/gofiber/fiber/v2"
	"go-media-service/controllers"
)

// SetUp menginisialisasi rute-rute aplikasi
func SetUp(app *fiber.App) {
	app.Get("/api/media", controllers.GetAll)
	app.Post("/api/media", controllers.Create)
	app.Put("/api/media/:id", controllers.Update)
	app.Delete("/api/media/:id", controllers.Delete)
}
