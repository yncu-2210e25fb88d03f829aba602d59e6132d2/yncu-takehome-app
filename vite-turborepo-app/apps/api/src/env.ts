/*
import { z } from "zod";

const schema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]),
});

const env = schema.parse(process.env);
*/

const env: Readonly<NodeJS.ProcessEnv> = process.env;

export { env };
