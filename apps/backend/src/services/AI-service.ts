import { AIRepository } from "../repositories";
const AIRepositoryObj = new AIRepository();
import { TrainModel } from "@repo/common/types";

export class AIService {
  constructor() {}
  async trainModels(data: any) {
    try {
      const response = await AIRepositoryObj.trainModels(data);
      return response;
    } catch (error) {
      console.log("Error occured in service layer");
      return error;
    }
  }
}
