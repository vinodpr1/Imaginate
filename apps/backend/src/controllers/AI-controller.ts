import type { Request, Response } from "express";
import { TrainModel, GenerateImage } from "@repo/common/types";
import { prismaClient } from "@repo/db/prismaClient";

const userID="duhgs834";
const trainModels = async (req: Request, res: Response) => {
  try {
    const parsedData = TrainModel.safeParse(req.body);
    console.log(req.body);
    if (!parsedData.success) {
      res.status(411).json({
        sucess: false,
        message: "Invalid input from User",
      });
      return;
    }
    console.log("OPPP", parsedData);
    console.log("Body of the request", req.body);
    if (!parsedData.success) return;
    const response = await prismaClient.trainModel.create({
      data: {
        name:          parsedData.data.name,
        type:          parsedData.data.type,
        age:           parsedData.data.age,
        ethinicity:    parsedData.data.ethinicity,
        eyeColor:      parsedData.data.eyeColor,
        bald:          parsedData.data.bald,
        userId:        userID,
      },
    });
    console.log("reponse from DB", response);
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



const generateImages= async (req: Request, res: Response) => {
  try {
    const parsedData = GenerateImage.safeParse(req.body);
    if (!parsedData.success) {
      res.status(200).json({
        sucess: false,
        message: "Invalid input from parsing",
      });
    }
    console.log("parsedData from type checkkeer",parsedData);
    if (!parsedData.success) return;
    const response = await prismaClient.outputImages.create({
      data:{      
        prompt :  parsedData.data.prompt,   
        userId  : userID,  
        modelId : "7a6b0600-f3d7-4093-8c11-f0ac19d72fee",  
      }
    })
    console.log("DUMP into DB now WEBHOOK wil take care",response);
    res.status(200).json({
      sucess: true,
      message: "Success",
      // data: "response",
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
}

const generatePacks= async (req: Request, res: Response) => {
  try {
    const parsedData = GenerateImage.safeParse(req.body);
    if (!parsedData.success) {
      res.status(200).json({
        sucess: false,
        message: "Invalid input from parsing",
      });
    }
    if (!parsedData.success) return;
    // const response = await prismaClient.trainingImages()
    res.status(200).json({
      sucess: true,
      message: "Success",
      data: "response",
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
}

export { trainModels, generateImages, generatePacks };
