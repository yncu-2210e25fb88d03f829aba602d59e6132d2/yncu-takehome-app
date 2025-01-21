import { ExampleResponse } from "../_types/ExampleResponse.js";
import { get } from "../_utils/database.js";
import { Request, Response } from "express";

/**
 * GET
 */
const handleGet = async (
  req: Readonly<Request>,
  res: Readonly<Response>,
): Promise<ExampleResponse> => {
  const exampleId = req.params.exampleId;

  try {
    /**
     * Fetch example data from database
     */
    const result = await get({ exampleId });
    if (!result) {
      return {
        status: 404,
        json: {
          message: "Resource not found",
        },
      };
    }

    // Return response
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
