-- CreateTable
CREATE TABLE "reviews" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(128) NOT NULL,
    "starrating" SMALLINT NOT NULL,
    "content" TEXT,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);
