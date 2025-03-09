import express from "express";
import { v1AiRouter } from "./v1";

export const router = express.Router();

router.use("/v1", v1AiRouter);
