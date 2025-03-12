import express from "express";
import { generateImages, generatePacks, trainModels } from "../../controllers";

export const AIRoutes = express.Router();

AIRoutes.post("/training", trainModels);
AIRoutes.post("/generateimages", generateImages);
AIRoutes.post("/generatepacks", generatePacks);
