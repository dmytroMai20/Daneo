# Daneo
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/dmytroMai20/Daneo/ci.yml)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/dmytroMai20/Daneo)
![GitHub pull request activity](https://img.shields.io/github/issues-pr/dmytroMai20/Daneo)

Online platform for peer-to-peer financial transactions.

## Links

Development conventions on: [Development Conventions](https://daneo.atlassian.net/wiki/x/wQEB)

[Jira Board](https://daneo.atlassian.net/jira/software/projects/SCRUM/summary)

## 🛠️ Local Development

### Prerequisites
- Go >= 1.xx
- Node.js >= 18
- Supabase CLI (optional, for local db emulation)

### Setup
```bash
# Clone repository
git clone https://github.com/dmytroMai20/Daneo.git
cd Daneo

# Install frontend deps
cd frontend
npm install

# Install backend deps
cd ../backend
go mod tidy
```

### Run
```bash
# Run frontend
cd ../frontend
npm run dev

# Run backend
cd ../backend
go run server.go
```



## Tech Stack

- **Backend**: Go
- **Frontend**: Vite React (SWC)
- **Database**: Postgresql (Supabase)
- **GraphQL**: gqlgen
- **Router**: Gin
- **Authentication**: JWT with Supabase
- **Linters**: golangci-lint, eslint, prettier
- **Development environment**: docker (TODO optional)

## Deployment

- **Docker**
- **Supabase**
- **AWS Amplify** for frontend
- **AWS Lambda** for backend
- **AWS API Gateway** for API

## Daneo Venture (potential extension)

Platform for VC funds to manage their portfolio. Track investments, monitor performance, and make informed decisions.
Integrates seamlessly with Daneo, allowing users to manage their investments and transactions in one place.