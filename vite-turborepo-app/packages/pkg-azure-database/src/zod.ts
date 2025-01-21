import { z } from "zod";

/**
 * Note:
 *
 * VARCHAR(1000) is the default set by Prisma for string fields.
 * FLOAT(53) is the default set by Prisma for float fields.
 *
 */
export const MAX_STRING = 1000;
export const MAX_NUMBER = 10 ** 53;

export type ZodEnumType = [string, ...string[]];
export type TypeFromZod<T extends z.ZodType<any, any, any>> = T["_input"];

// // // // // // // // // // // // // // // // // // // // // // // // // // // //
//
//
//
// Prisma-Zod Models for: Example
//
//
//
// // // // // // // // // // // // // // // // // // // // // // // // // // // //
export const ExampleSchema = z.object({
  //
  // From the database
  //
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type Example = z.input<typeof ExampleSchema>;
