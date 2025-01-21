/*
import { z } from "zod";

const schema = z.object({
  VITE_PUBLIC_NODE_ENV: z.enum(["development", "production", "test"]),
});

const env = schema.parse(process.env);
*/

const env = import.meta.env;

export { env };
