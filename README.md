# YNCU Takehome Application
Welcome, we're excited for you to join us!

![image](https://github.com/user-attachments/assets/d26894ad-dc08-4ae3-aeaf-89ba3ce899df)

# 1. Intro

Welcome! We're excited that you're interested in YNCU and are looking to get started with the application process.

The YNCU Takehome Application is used to guarantee your success here.

We're here to help, so please reach out if you have any questions!

You can get started by reviewing the content below.

## 1.1. Purpose & Evaluation

The purpose of this is to evaluate:
1. Your comfortibility with the stack we typically use.
2. Your comfortibility with working in a team to collaboratively develop an application.
3. Your comfortibility with building larger applications.
4. Understanding how you approach a problem -- from design to deployment.
5. Understanding how you approach learning new technologies.

If you don't already have experience with the stack provided, THAT IS OKAY!

Try your best, explain your thoughts/ideas, leverage diagraming tools to better emphasize what you're trying to accomplish, etc.

# 2. Application

So what will you actually be building? And with which technologies/stack?

## 2.1. Product

You have a few options.

1. Task Management Dashboard

- More information + flowchart can be found [here](https://app.eraser.io/workspace/cmNuIVpAo1hWjtxs77BM?origin=share)

2. Ecommerce Dashboard

- More information + flowchart can be found [here](https://app.eraser.io/workspace/cmNuIVpAo1hWjtxs77BM?origin=share)

3. Surprise us!

- Build any implementation of a dashboard you want.
- IMPORTANT: Application **MUST** be a some implementation of a **dashboard**.

## 2.2. Cheating (not fun)

Please don't cheat. We will know. It wastes both of our time. We're using both external and internal tools to evaluate submissions.

Seriously... just don't.

### 2.2.1. What DOES constitute as cheating?

You should already know this. If you have any questions, please reach out. I'd rather you ask then have your submission thrown out for cheating.

### 2.2.2. What DOES NOT constitute as cheating?

These tools are OKAY to use.

- Using GitHub Copilot
- Using LLMs (ChatGPT, Claude, etc.) to write documentation/perform laborious tasks.
- Using code from the internet (Please just cite where you got the code from if it's > 10 lines. This does not hurt your submission in any way!)
- Using code from your previous projects (Please just document that you've used code from a previous project. This does not hurt your submission in any way!)
- Using external libraries not provided in the [2.3. Stack & Requirements](#23-stack--requirements) section!

Again, if there is anything that you're concerned may constitute as cheating, please reach out!

## 2.3. Stack & Requirements

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
- It doesn't matter which type of authentication you use (Google, Microsoft, Email+Pass, etc. However Microsoft is preferred).

11. Documentation

- Required.
- Explain what the application does, how it works, etc.
- Include any other information/explanations (including flowcharts) here.
- IMPORTANT: Explain how to run your application with **ordered** steps!
- IMPORTANT: Elaborate on any other technologies that you used.
- IMPORTANT: Showcase your application (with either a video or screenshots)! If the application doesn't run on our end, we'll have a good idea of what it looks like.

12. Deployment

- Optional.
- Deploy to a cloud service provider (Azure, AWS, etc. However Azure is preferred).

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
- [Semantic commit messages](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)

Let me know.

# 4. Final Remarks + Tips

- In comments, explain what you're doing + why you're doing it.
- Consider security vulnerabilities, alternative solutions, etc.
- Emphasize well-documented code.
- Format the code! A prettier config file is provided for you.
- Follow common paradigms + structures (including file/folder, functional programming, etc.) when developing full-stack applications.
- Work together!
- And have fun!!!

If you have any questions, shoot me a message!
