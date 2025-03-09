-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MAN', 'WOMEN', 'OTHER');

-- CreateEnum
CREATE TYPE "Ethinicity" AS ENUM ('White', 'Black', 'Asian', 'American', 'EastSouthAsian', 'SouthAsian', 'Pacific', 'MiddleEastern', 'Hispanic');

-- CreateEnum
CREATE TYPE "EyeColor" AS ENUM ('Brown', 'Gray', 'Hazel', 'Blue');

-- CreateTable
CREATE TABLE "TrainModel" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "Gender" NOT NULL DEFAULT 'MAN',
    "age" INTEGER NOT NULL DEFAULT 15,
    "ethinicity" "Ethinicity" NOT NULL DEFAULT 'White',
    "eyeColor" "EyeColor" NOT NULL DEFAULT 'Brown',
    "bald" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "TrainModel_pkey" PRIMARY KEY ("id")
);
