/*
  Warnings:

  - You are about to drop the column `time` on the `reservation` table. All the data in the column will be lost.
  - Added the required column `session` to the `reservation` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `service` on the `reservation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Service" AS ENUM ('HS', 'MP', 'FT');

-- AlterTable
ALTER TABLE "reservation" DROP COLUMN "time",
ADD COLUMN     "session" INTEGER NOT NULL,
DROP COLUMN "service",
ADD COLUMN     "service" "Service" NOT NULL;
