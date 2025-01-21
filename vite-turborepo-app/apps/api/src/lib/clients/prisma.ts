import { PrismaClient } from "@repo/pkg-azure-database/prisma.js";

const prisma = new PrismaClient({
  log: ["query"],
});

export { prisma };
