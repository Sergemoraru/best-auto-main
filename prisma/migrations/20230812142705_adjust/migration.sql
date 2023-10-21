/*
  Warnings:

  - You are about to drop the `Cars` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Cars" DROP CONSTRAINT "Cars_userId_fkey";

-- DropTable
DROP TABLE "Cars";

-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "year" INTEGER,
    "make" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "description" TEXT,
    "price" INTEGER,
    "image" TEXT,
    "color" TEXT,
    "status" TEXT,
    "userId" INTEGER,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
