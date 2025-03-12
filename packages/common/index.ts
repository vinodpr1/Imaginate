import { z } from "zod";

export const TrainModel = z.object({
  name: z.string(),
  type: z.enum(["MAN", "WOMEN", "OTHER"]),
  age: z.number(),
  ethinicity: z.enum([
    "White",
    "Black",
    "Asian",
    "American",
    "EastSouthAsian",
    "SouthAsian",
    "Pacific",
    "MiddleEastern",
    "Hispanic",
  ]),
  eyeColor: z.enum(["Brown", "Gray", "Hazel", "Blue"]),
  bald: z.boolean(),
});

export const GenerateImage = z.object({
  prompt: z.string(),
  // modelid: z.string(),
  num: z.number(),
});
  
export const GenerateImagesFromPack = z.object({
  modelid: z.string(),
  packId: z.string(),
});


export const User = z.object({
  name          : z.string(),
  email         : z.string().email(),
  password      : z.string(),
  profilePicture: z.string().optional(),
})












