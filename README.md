# MyApp - Modern Full-Stack Template

A scalable, modern web application template using **Next.js**, **.NET 8**, and **PostgreSQL**.

## Stack
- **Frontend**: Next.js 16 (App Router) + TypeScript + Tailwind CSS + shadcn/ui
- **Backend**: .NET 8 Web API + Entity Framework Core
- **Database**: PostgreSQL
- **Auth**: JWT + Refresh Tokens + RBAC
- **DevOps**: Docker + GitHub Actions

## Quick Start (10 Minutes)

### Prerequisites
- Docker & Docker Compose
- .NET 8 SDK
- Node.js 20+

### Step 1: Clone and Setup Env
```bash
# Copy env templates (to be created)
cp .env.example .env
```

### Step 2: Spin up Database
```bash
docker-compose -f infra/docker-compose.yml up db -d
```

### Step 3: Run Backend
```bash
cd apps/api
dotnet restore
dotnet run
```

### Step 4: Run Frontend
```bash
cd apps/web
npm install
npm run dev
```

## Repository Structure
- `apps/api`: .NET 8 Web API
- `apps/web`: Next.js frontend
- `infra/`: Docker and infrastructure configs
- `packages/shared`: Shared types/logic (optional)

## Switch Options (Pragmatic)
- **SQL Server**: Change `Npgsql` to `Microsoft.EntityFrameworkCore.SqlServer` in `apps/api`.
- **Node Backend**: Replace `apps/api` with NestJS scaffold.
