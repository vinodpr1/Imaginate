import {number, z} from "zod";

export const TrainModel = z.object({
     name: z.string(),
     type: z.enum(['MAN', 'WOMEN', 'OTHER']),
     age: z.number(),
     ethinicity: z.enum(['White', 'Black', 'Asian', 'American',
                         'EastSouthAsian', 'SouthAsian', 'Pacific',
                          'MiddleEastern', 'Hispanic'
                     ]),
     eyeColor: z.enum(['Brown', 'Gray', 'Hazel', 'Blue']),
     bald: z.boolean(),
     userId: z.string()
});

export const GenerateImage = z.object({
    prompt: z.string(),
    modelid: z.string(),
    num: z.number()
})

export const GenerateImagesFromPack = z.object({
    modelid: z.string(),
    packId: z.string()
})

