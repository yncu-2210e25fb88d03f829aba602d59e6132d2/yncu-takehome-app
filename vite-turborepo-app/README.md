# YNCU Turborepo Example

## 1. Getting Started

Start the SQL database

```
docker compose up database
```

Start the api backend

```
pnpm dev:api
```

Start the web frontend

```
pnpm dev:web
```

## 2. What's Included?

- Node + Express API: `/apps/api` with the following
  - Example API routes

- React + Vite Frontend: `/apps/web` with the following
  - Tanstack Router
  - Tanstack Query Example
  - MSAL Auth
  - Login Page
  - Home Page

- Packages: `/packages` with the following
  - eslint config
  - msal auth config
  - tailwind config
  - azure database schema and .ts files
  - some basic react hooks
  - shadcn components