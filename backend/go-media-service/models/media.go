package models

import (
	"time"
)

// Media represents a media entity
type Media struct {
	ID        uint      `gorm:"primaryKey" json:"id"`
	Image     string    `json:"image"`
	CreatedAt time.Time `gorm:"type:timestamp;default:current_timestamp" json:"created_at"`
	UpdatedAt time.Time `gorm:"type:timestamp;default:current_timestamp" json:"updated_at"`
}
