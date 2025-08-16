# Go backend with GraphQL

## Router: Gin router

## Authentication: JWT

## Database: Supabase

## GraphQL: gqlgen

## Linter: golangci-lint

## Backend-controlled subscriptions

Backend (Go service) listens for DB changes (via LISTEN/NOTIFY, logical replication, Supabase realtime feed, or polling).

Backend applies business logic + filtering.

Backend emits GraphQL subscriptions to frontend clients.

Keeps DB private.

Clients only see the shaped data they’re allowed to.