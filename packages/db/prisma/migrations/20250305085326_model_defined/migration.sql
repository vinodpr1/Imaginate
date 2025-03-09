/*
  Warnings:

  - The `type` column on the `TrainModel` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `ethinicity` column on the `TrainModel` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `eyeColor` column on the `TrainModel` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "GenderEnum" AS ENUM ('MAN', 'WOMEN', 'OTHER');

-- CreateEnum
CREATE TYPE "EthinicityEnum" AS ENUM ('White', 'Black', 'Asian', 'American', 'EastSouthAsian', 'SouthAsian', 'Pacific', 'MiddleEastern', 'Hispanic');

-- CreateEnum
CREATE TYPE "EyeColorEnum" AS ENUM ('Brown', 'Gray', 'Hazel', 'Blue');

-- AlterTable
ALTER TABLE "TrainModel" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "type",
ADD COLUMN     "type" "GenderEnum" NOT NULL DEFAULT 'MAN',
DROP COLUMN "ethinicity",
ADD COLUMN     "ethinicity" "EthinicityEnum" NOT NULL DEFAULT 'White',
DROP COLUMN "eyeColor",
ADD COLUMN     "eyeColor" "EyeColorEnum" NOT NULL DEFAULT 'Brown';

-- DropEnum
DROP TYPE "Ethinicity";

-- DropEnum
DROP TYPE "EyeColor";

-- DropEnum
DROP TYPE "Gender";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "profilePicture" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrainingImages" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "modelId" TEXT NOT NULL,

    CONSTRAINT "TrainingImages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OutputImages" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "modelId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OutputImages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pack" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Pack_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PackPrompts" (
    "id" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "packId" TEXT NOT NULL,

    CONSTRAINT "PackPrompts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TrainingImages" ADD CONSTRAINT "TrainingImages_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "TrainModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OutputImages" ADD CONSTRAINT "OutputImages_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "TrainModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PackPrompts" ADD CONSTRAINT "PackPrompts_packId_fkey" FOREIGN KEY ("packId") REFERENCES "Pack"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
