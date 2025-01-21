import * as AllExamples from "@/routes/examples/+route/_handlers/index.js";
import * as Example from "@/routes/examples/[exampleId]/+route/_handlers/index.js";

import express from "express";
import cors from "cors";
import { env } from "@/env.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

/**
 * [path]/examples/ (GET, POST)
 */
app.get(`${env.EXPRESS_API_PATH}/examples`, async (req, res) => {
  try {
    const result = await AllExamples.handleGet(req, res);

    res.status(result.status).send(result.json);
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "An internal error occurred" });
  }
});

app.post(`${env.EXPRESS_API_PATH}/examples`, async (req, res) => {
  try {
    const result = await AllExamples.handlePost(req, res);

    res.status(result.status).send(result.json);
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "An internal error occurred" });
  }
});

/**
 * [path]/examples/:exampleId/ (GET, PUT, DELETE)
 */
app.get(`${env.EXPRESS_API_PATH}/examples/:exampleId`, async (req, res) => {
  try {
    const result = await Example.handleGet(req, res);

    res.status(result.status).send(result.json);
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "An internal error occurred" });
  }
});

app.put(`${env.EXPRESS_API_PATH}/examples/:exampleId`, async (req, res) => {
  try {
    const result = await Example.handlePut(req, res);

    res.status(result.status).send(result.json);
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "An internal error occurred" });
  }
});

app.delete(`${env.EXPRESS_API_PATH}/examples/:exampleId`, async (req, res) => {
  try {
    const result = await Example.handleDelete(req, res);

    res.status(result.status).send(result.json);
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "An internal error occurred" });
  }
});

/**
 * Listen to the server
 */
app.listen(env.EXPRESS_API_HOST_PORT, () => {
  app._router.stack.forEach((r) => {
    if (r.route && r.route.path) {
      console.log(`Initialized route: ${r.route.path}`);
    }
  });

  console.log(`Server listening on :${env.EXPRESS_API_HOST_PORT}`);
});
