import { ExampleResponse } from "../_types/ExampleResponse.js";
import { update } from "../_utils/database.js";
import { Request, Response } from "express";

/**
 * UPDATE
 */
const handlePut = async (
  req: Readonly<Request>,
  res: Readonly<Response>,
): Promise<ExampleResponse> => {
  const exampleId = req.params.exampleId;

  try {
    /**
     * Update example data in the database
     */
    const result = await update({ exampleId, data: req.body });

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

export { handlePut };
