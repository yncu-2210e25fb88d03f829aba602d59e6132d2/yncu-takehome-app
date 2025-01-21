import { ExampleResponse } from "../_types/ExampleResponse.js";
import { remove } from "../_utils/database.js";
import { Request, Response } from "express";

/**
 * DELETE
 */
const handleDelete = async (
  req: Readonly<Request>,
  res: Readonly<Response>,
): Promise<ExampleResponse> => {
  const exampleId = req.params.exampleId;

  try {
    /**
     * Delete the example from database
     */
    const result = await remove({ exampleId });

    return {
      status: 200,
      json: {
        message: "Success",
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

export { handleDelete };
