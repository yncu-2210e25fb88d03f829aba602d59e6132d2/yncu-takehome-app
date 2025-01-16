# YNCU Takehome App

# 1. Intro

# 2. Application

So what will you actually be building? And with which technologies/stack?

## 2.1. Product

You have a few options.

1. Task Management Dashboard

- More information + flowchart can be found [here](https://app.eraser.io/workspace/cmNuIVpAo1hWjtxs77BM?origin=share)

2. Ecommerce Dashboard

- More information + flowchart can be found [here](https://app.eraser.io/workspace/cmNuIVpAo1hWjtxs77BM?origin=share)


## 2.2. Stack

Leverage this stack to build your application. Reasons as to why you're required to use this stack are defined below.

1. [Turborepo](https://turbo.build/)

- Required.
- Turborepo is used to build scalable, efficient monorepos.
- We've already set up a turborepo project for you.

2. [React](https://react.dev/)

- Required.
- You need to be comfortable with building React components + following standards and best practices.

3. [Vite](https://vite.dev/) or [Next.js](https://nextjs.org/)

- Required.
- However, the choice as to which one you use is up to you.

4. [Node + Express](https://expressjs.com/) or [tRPC](https://trpc.io/) or [Next.js Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)

- Required.
- However, the choice as to which one you use is up to you.

5. [Tailwind CSS](https://tailwindcss.com/)

- Required.
- Please try to use Tailwind CSS wherever possible. CSS or SCSS is allowed, but prioritize Tailwind.

6. [shadcn](https://ui.shadcn.com/) or [Next UI](https://nextui.org/)

- Optional.
- However, we use shadcn and using it will also speed up development.

7. [Docker](https://www.docker.com/)

- Required.
- Spin up a local Azure SQL Edge database (required).
- Spin up a local development environment (optional).
- How optimized can you make the container? How light-weight can you make the image size? (optional).

8. [Azure SQL Edge](https://azure.microsoft.com/en-us/products/azure-sql/edge)

- Both `Dockerfile` and `docker-compose.yml` files are already set up for you.
- Install Docker Desktop and follow the run instructions.

9. [Prisma ORM](https://www.prisma.io/)

- Required.
- Show us that you can build scalable, well-structured data models! (THIS IS REALLY IMPORTANT!)
- As our applications grow, our data model will most likely as well!

10. Authentication

- Required.
- It doesn't matter which type of authentication you use (Google, Microsoft, Email+Pass, etc.)

### 2.2.1. Why this stack?

- We're using this stack for the majority of our future applications now.
- We're using this stack for the commercial loan origination software (CLOS) which you'll be working on.
- We're using this stack for the internal tools software (YNCU Tools) which you'll be working on.
- These are all modern technologies used in modern fullstack development.
- Our applications have 1,000s to 100,000s of lines of code. This stack helps us scale and handle this.

# 3. Working Together

I'll create a GitHub organization specific to this take-home for you all to work together on the application.

Some things you may want to (but are not required to) consider leveraging:
- Feature branches
- Dev/Prod branches

Let me know.

# 4. Final Remarks + Tips

- In comments, explain what you're doing + why you're doing it.
- Consider security vulnerabilities, alternative solutions, etc.
- Emphasize well-documented code.
- Format the code! A prettier config file is provided for you.
- Follow common paradigms + structures (including file/folder, functional programming, etc.) when developing full-stack applications.
- Work together!
- And have fun!!!
