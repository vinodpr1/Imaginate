/*
  Warnings:

  - The values [EastSouthAsian,SouthAsian,MiddleEastern] on the enum `EthinicityEnum` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `userId` to the `OutputImages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `TrainModel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "EthinicityEnum_new" AS ENUM ('White', 'Black', 'Asian', 'American', 'East South Asian', 'South Asian', 'Pacific', 'Middle Eastern', 'Hispanic');
ALTER TABLE "TrainModel" ALTER COLUMN "ethinicity" DROP DEFAULT;
ALTER TABLE "TrainModel" ALTER COLUMN "ethinicity" TYPE "EthinicityEnum_new" USING ("ethinicity"::text::"EthinicityEnum_new");
ALTER TYPE "EthinicityEnum" RENAME TO "EthinicityEnum_old";
ALTER TYPE "EthinicityEnum_new" RENAME TO "EthinicityEnum";
DROP TYPE "EthinicityEnum_old";
ALTER TABLE "TrainModel" ALTER COLUMN "ethinicity" SET DEFAULT 'White';
COMMIT;

-- AlterTable
ALTER TABLE "OutputImages" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TrainModel" ADD COLUMN     "userId" TEXT NOT NULL;
