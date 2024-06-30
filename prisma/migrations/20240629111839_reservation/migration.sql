-- CreateTable
CREATE TABLE "reservation" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(128) NOT NULL,
    "reservationtime" TIMESTAMP(3) NOT NULL,
    "service" TEXT NOT NULL,

    CONSTRAINT "reservation_pkey" PRIMARY KEY ("id")
);
