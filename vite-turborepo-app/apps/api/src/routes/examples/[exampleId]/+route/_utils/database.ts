import { prisma } from "@/lib/clients/prisma.js";
import { Prisma } from "@repo/pkg-azure-database/prisma.js";
import { partialParse } from "@repo/pkg-utils/zod.js";
import { ExampleSchema } from "@repo/pkg-azure-database/zod.js";

const selectQuery: Readonly<Prisma.ExampleSelect> = {
  id: true,
  createdAt: true,
  updatedAt: true,
};

const get = async ({ exampleId }: Readonly<{ exampleId: string }>) => {
  try {
    const res = await prisma.example.findFirst({
      select: selectQuery,
      where: {
        id: exampleId,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return {
      data: res,
    };
  } catch (error) {
    console.error(error);

    throw new Error("Failed to get example");
  } finally {
    // Clean up
  }
};

const update = async ({
  exampleId,
  data,
}: Readonly<{
  exampleId: string;
  data: unknown;
}>) => {
  const { result: parsed } = partialParse({
    schema: ExampleSchema,
    data,
  });

  if (!parsed.success) {
    return parsed;
  }

  try {
    const res = await prisma.example.update({
      data: parsed.data,
      select: selectQuery,
      where: {
        id: exampleId,
      },
    });

    return {
      data: res,
    };
  } catch (error) {
    console.error(error);

    throw new Error("Failed to update example");
  } finally {
    // Clean up
  }
};

const remove = async ({ exampleId }: Readonly<{ exampleId: string }>) => {
  try {
    const res = await prisma.example.delete({
      select: selectQuery,
      where: {
        id: exampleId,
      },
    });

    return {
      data: res,
    };
  } catch (error) {
    console.error(error);

    throw new Error("Failed to delete example");
  } finally {
    // Clean up
  }
};

export { get, update, remove };
