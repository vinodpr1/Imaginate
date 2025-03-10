import { AIService } from "../services";
import type { Request, Response } from "express";
import { TrainModel } from "@repo/common/types";

const AIServiceObj = new AIService();

const trainModels = async (req: Request, res: Response) => {
  try {
    console.log("KREEUEUEU", process.env.FAL_KEY);
    const parsedData = TrainModel.safeParse(req.body);
    if (!parsedData.success) {
      res.status(200).json({
        sucess: false,
        message: "Invalid input from parsing",
      });
    }
    console.log("OPPP", parsedData);
    console.log("Body of the request", req.body);
    if (!parsedData.success) return;
    const response = await AIServiceObj.trainModels(req.body);
    res.status(200).json({
      sucess: true,
      message: "Success",
      data: response,
    });
    return;
  } catch (error) {
    console.log("error in controllers", error);
    res.status(500).json({
      sucess: false,
      message: "Error in controller",
      data: error,
    });
    return;
  }
};

export { trainModels };
