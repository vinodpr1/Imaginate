import express from "express";
import { AIRoutes } from "./ai-routes";

export const v1AiRouter = express.Router();

v1AiRouter.use("/ai", AIRoutes);
