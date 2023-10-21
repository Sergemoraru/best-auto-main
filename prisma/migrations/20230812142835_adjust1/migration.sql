/*
  Warnings:

  - You are about to drop the column `userId` on the `Car` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Car" DROP CONSTRAINT "Car_userId_fkey";

-- AlterTable
ALTER TABLE "Car" DROP COLUMN "userId";
