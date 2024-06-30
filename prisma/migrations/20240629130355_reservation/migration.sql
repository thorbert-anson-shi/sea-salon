/*
  Warnings:

  - You are about to drop the column `reservationtime` on the `reservation` table. All the data in the column will be lost.
  - Added the required column `phoneNo` to the `reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `reservation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "reservation" DROP COLUMN "reservationtime",
ADD COLUMN     "phoneNo" VARCHAR(15) NOT NULL,
ADD COLUMN     "time" TIMESTAMP(3) NOT NULL;
