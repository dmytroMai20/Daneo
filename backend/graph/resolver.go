package graph

import (
	"github.com/jackc/pgx/v5/pgxpool"
)

type Resolver struct {
	DB *pgxpool.Pool
}

func NewResolver(dbPool *pgxpool.Pool) *Resolver {
	return &Resolver{
		DB: dbPool,
	}
}
