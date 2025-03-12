import express from "express";
import { generateImages, generatePacks, trainModels, getPacks } from "../../controllers";

export const AIRoutes = express.Router();

AIRoutes.post("/training", trainModels);
AIRoutes.post("/generateimages", generateImages);
AIRoutes.post("/generatepacks", generatePacks);
AIRoutes.get("/packs", getPacks);
