import { ExampleResponse } from "../_types/ExampleResponse.js";
import { getAll } from "../_utils/database.js";
import { Request, Response } from "express";

/**
 * GET
 */
const handleGet = async (
  req: Readonly<Request>,
  res: Readonly<Response>,
): Promise<ExampleResponse> => {
  try {
    /**
     * Get all examples
     */
    const result = await getAll();

    return {
      status: 200,
      json: {
        data: result.data,
        message: "Success",
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

export { handleGet };
