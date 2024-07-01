/*
  Warnings:

  - You are about to drop the `reviews` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `date` to the `reservation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "reservation" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "reviews";

-- CreateTable
CREATE TABLE "review" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(128) NOT NULL,
    "starrating" SMALLINT NOT NULL,
    "content" TEXT,

    CONSTRAINT "review_pkey" PRIMARY KEY ("id")
);
