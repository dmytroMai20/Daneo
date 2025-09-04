# Go backend with GraphQL

## Router: Gin router

## Authentication: JWT 

## Database: Supabase

pgx for DB interactions (best performance & flexibility).

Supabase SDK only for auth

## GraphQL: gqlgen

To regenerate code after altering schema run:
```
go run github.com/99designs/gqlgen generate
```

## Linter: golangci-lint

## Backend-controlled subscriptions

Backend (Go service) listens for DB changes (via LISTEN/NOTIFY, logical replication, Supabase realtime feed, or polling).

Backend applies business logic + filtering.

Backend emits GraphQL subscriptions to frontend clients.

Keeps DB private.

## Useful links

[Go Proverbs](https://go-proverbs.github.io/)

[Go Concurrency Patterns](https://go.dev/talks/2012/concurrency.slide)