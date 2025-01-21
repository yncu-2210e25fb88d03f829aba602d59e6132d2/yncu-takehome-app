import { prisma } from "@/lib/clients/prisma.js";
import { Prisma } from "@repo/pkg-azure-database/prisma.js";

const selectQuery: Readonly<Prisma.ExampleSelect> = {
  id: true,
  createdAt: true,
  updatedAt: true,
};

const getAll = async () => {
  try {
    const res = await prisma.example.findMany({
      select: selectQuery,
      orderBy: {
        createdAt: "asc",
      },
    });

    return {
      data: res,
    };
  } catch (error) {
    console.error(error);

    throw new Error("Failed to get examples");
  } finally {
    // Clean up
  }
};

const create = async ({}: Readonly<{}>) => {
  try {
    const res = await prisma.example.create({
      select: selectQuery,
      data: {},
    });

    return {
      data: res,
    };
  } catch (error) {
    console.error(error);

    throw new Error("Failed to create example");
  } finally {
    // Clean up
  }
};

export { getAll, create };
