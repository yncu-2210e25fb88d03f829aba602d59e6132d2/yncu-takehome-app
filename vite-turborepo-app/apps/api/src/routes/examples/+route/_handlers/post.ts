import { ExampleResponse } from "../_types/ExampleResponse.js";
import { create } from "../_utils/database.js";
import { Request, Response } from "express";

/**
 * CREATE
 */
const handlePost = async (
  req: Readonly<Request>,
  res: Readonly<Response>,
): Promise<ExampleResponse> => {
  try {
    /**
     * Create the example
     */
    const result = await create({});

    return {
      status: 200,
      json: {
        message: "Successfully created example",
        data: result.data,
      },
    };
  } catch (error) {
    return {
      status: 500,
      json: {
        message: error.message,
      },
    };
  }
};

export { handlePost };
