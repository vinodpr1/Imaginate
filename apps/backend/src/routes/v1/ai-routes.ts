import express from "express";
import { trainModels } from "../../controllers";

export const AIRoutes = express.Router();

AIRoutes.post("/training", trainModels);
