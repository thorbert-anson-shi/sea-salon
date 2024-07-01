-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'CUSTOMER');

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "fullName" VARCHAR(128) NOT NULL,
    "email" VARCHAR(128) NOT NULL,
    "phoneNo" VARCHAR(15) NOT NULL,
    "password" VARCHAR(128) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'CUSTOMER',

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
