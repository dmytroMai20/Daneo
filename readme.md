# Daneo
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/dmytroMai20/Daneo/ci.yml)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/dmytroMai20/Daneo)
![GitHub pull request activity](https://img.shields.io/github/issues-pr/dmytroMai20/Daneo)

Online platform for peer-to-peer financial transactions.

Jira board: [Jira Board](https://daneo.atlassian.net/jira/software/projects/SCRUM/summary)

## Development

Development conventions on: [Development Conventions](https://daneo.atlassian.net/wiki/x/wQEB)

## Tech Stack

- Backend: Go
- Frontend: Vite React (SWC)
- Database: Postgresql (Supabase)
- GraphQL: gqlgen
- Router: Gin
- Authentication: JWT with Supabase
- Linters: golangci-lint, eslint, prettier
- Development environment: docker

## Deployment

- Docker
- Supabase
- AWS Amplify for frontend
- AWS Lambda for backend
- AWS API Gateway for API

## Daneo Venture (potential extension)

Platform for VC funds to manage their portfolio. Track investments, monitor performance, and make informed decisions.
Integrates seamlessly with Daneo, allowing users to manage their investments and transactions in one place.