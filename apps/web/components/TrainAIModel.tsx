"use client";
import * as React from "react";
import { Button } from "./ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../src/components/ui/card";
import { Input } from "../src/components/ui/input";
import { Label } from "../src/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../src/components/ui/select";
import { Switch } from "../src/components/ui/switch";
import { useState } from "react";
import axios from "axios";

const TrainAIModel = () => {
    const [trainingData, setTrainingData] = useState({
        name: "",
        age: 0,
        ethinicity: "",
        type: "",
        eyeColor: "",
        bald: false,
    });

    // name: z.string(),
    // type: z.enum(["MAN", "WOMEN", "OTHER"]),
    // age: z.number(),
    // ethinicity: z.enum([
    //   "White",
    //   "Black",
    //   "Asian",
    //   "American",
    //   "EastSouthAsian",
    //   "SouthAsian",
    //   "Pacific",
    //   "MiddleEastern",
    //   "Hispanic",
    // ]),
    // eyeColor: z.enum(["Brown", "Gray", "Hazel", "Blue"]),
    // bald: z.boolean(),
    // userId: z.string(),

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setTrainingData({ ...trainingData, [name]: value });
    };

    const trainModel = async () => {
        console.log(trainingData);
        let model = trainingData;
        model.age=Number(model.age);
        const response = await axios.post("http://localhost:8080/api/v1/ai/training", trainingData);
        console.log("Respond", response);
        setTrainingData({
            name: "",
            age: 0,
            ethinicity: "",
            type: "",
            eyeColor: "",
            bald: false,
        })
    }


    return (
        <div className="rounded-2xl bg-linear-to-b/increasing from-white via-[#faefe2] to-[#faefe2] border mb-20">
            <section className="grid-background pt-36 pb-20 px-4 rounded-2xl">
                <div className="container flex justify-center mx-auto text-center">
                    <Card className="w-[350px]">
                        <CardHeader>
                            <CardTitle>Train a model</CardTitle>
                            <CardDescription>
                                Train a model & generate thousand of images.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <form>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex gap-4 justify-between">
                                        <div className="flex flex-1 flex-col space-y-1.5">
                                            <Label htmlFor="name">Name</Label>
                                            <Input
                                                onChange={(e) => handleInputChange(e)}
                                                value={trainingData.name}
                                                name="name"
                                                id="name"
                                                placeholder="Name"
                                            />
                                        </div>
                                        <div className="flex flex-1 flex-col space-y-1.5">
                                            <Label htmlFor="age">Age</Label>
                                            <Input
                                                onChange={(e) => handleInputChange(e)}
                                                value={trainingData.age}
                                                type="number"
                                                name="age"
                                                id="age"
                                                placeholder="Age"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-1 flex-col space-y-1.5">
                                        <Label htmlFor="ethinicity">Ethinicity</Label>
                                        <Select
                                            onValueChange={(e: any) => {
                                                setTrainingData({ ...trainingData, ethinicity: e });
                                            }}
                                            name="ethinicity"
                                            value={trainingData.ethinicity}
                                        >
                                            <SelectTrigger id="ethinicity" className="w-full">
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent position="popper">
                                                <SelectItem value="White">White</SelectItem>
                                                <SelectItem value="Black">Black</SelectItem>
                                                <SelectItem value="Asian">Asian</SelectItem>
                                                <SelectItem value="American">American</SelectItem>
                                                <SelectItem value="EastSouthAsian">
                                                    EastSouthAsian
                                                </SelectItem>
                                                <SelectItem value="SouthAsian">SouthAsian</SelectItem>
                                                <SelectItem value="Pacific">Pacific</SelectItem>
                                                <SelectItem value="MiddleEastern">
                                                    MiddleEastern
                                                </SelectItem>
                                                <SelectItem value="Hispanic">Hispanic</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="flex gap-4 justify-between">
                                        <div className="flex flex-1 flex-col space-y-1.5">
                                            <Label htmlFor="type">Gender</Label>
                                            <Select
                                                onValueChange={(e: any) => {
                                                    setTrainingData({ ...trainingData, type: e });
                                                }}
                                                value={trainingData.type}
                                                name="type"
                                            >
                                                <SelectTrigger id="type" className="w-full">
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                                <SelectContent position="popper">
                                                    <SelectItem value="MAN">MAN</SelectItem>
                                                    <SelectItem value="WOMEN">WOMEN</SelectItem>
                                                    <SelectItem value="OTHER">OTHER</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="flex flex-1 flex-col space-y-1.5">
                                            <Label htmlFor="eyeColor">Eye Color</Label>
                                            <Select
                                                onValueChange={(e: any) => {
                                                    setTrainingData({ ...trainingData, eyeColor: e });
                                                }}
                                                value={trainingData.eyeColor}
                                                name="eyecolor"
                                            >
                                                <SelectTrigger id="eyeColor" className="w-full">
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                                <SelectContent position="popper">
                                                    <SelectItem value="Brown">Brown</SelectItem>
                                                    <SelectItem value="Gray">Gray</SelectItem>
                                                    <SelectItem value="Hazel">Hazel</SelectItem>
                                                    <SelectItem value="Blue">Blue</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <Switch
                                            id="bald"
                                            name="bald"
                                        />
                                        <Label htmlFor="bald">Bald</Label>
                                    </div>
                                </div>
                          </form>
                        </CardContent>

                        <div className="flex items-center justify-center px-6">
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                </div>
                                <input id="dropzone-file" type="file" multiple={true} className="hidden" />
                            </label>
                        </div>


                        <CardFooter className="flex justify-between">
                            <Button
                                variant="outline"
                                className="cursor-pointer">
                                Cancel
                            </Button>
                            <Button
                                disabled={
                                    !trainingData.name ||
                                    !trainingData.eyeColor ||
                                    !trainingData.age ||
                                    !trainingData.type ||
                                    !trainingData.ethinicity
                                }
                                className="cursor-pointer"
                                onClick={trainModel}
                            >
                                Deploy
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </section>
        </div>
    );
};

export default TrainAIModel;
