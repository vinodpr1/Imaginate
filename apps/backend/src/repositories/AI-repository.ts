import {prismaClient} from "@repo/db/prismaClient";
export class AIRepository{
    constructor(){}
   
    async trainModels(data:any){
        try {
            const response = await prismaClient.trainModel.create({data:{          
                name : data.name,         
                type : data.type,       
                age : data.age,          
                ethinicity : data.ethinicity,    
                eyeColor : data.eyeColor,      
                bald : data.bald,          
                userId : data.userId         
             }})
             console.log("Responsee", response);
            return response;
        } catch (error) {
            console.log("Error occured in repository layer", error);
            return error;
        }
    }
}