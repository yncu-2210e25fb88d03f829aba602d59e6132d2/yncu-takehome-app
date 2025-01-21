import { z, AnyZodObject } from "zod";

type ParseResult = {
  success: boolean;
  error?: z.ZodError<{
    [x: string]: any;
  }>;
  data?: Readonly<{
    [x: string]: any;
  }>;
};

type PartialZodObject = z.ZodObject<
  {
    [x: string]: z.ZodOptional<any>;
  },
  any,
  any,
  {
    [x: string]: any;
  },
  {
    [x: string]: any;
  }
>;

const partialParse = ({
  schema,
  data,
  parseFn = ({ partial }) => {
    return partial.safeParse(data);
  },
}: Readonly<{
  schema: AnyZodObject;
  data: unknown;
  parseFn?: (params: Readonly<{ partial: PartialZodObject }>) => ParseResult;
}>) => {
  const partial = schema.deepPartial();

  const result = parseFn({ partial });

  return { partial, result };
};

export { partialParse };
