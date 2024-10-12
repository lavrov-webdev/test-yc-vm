-- CreateEnum
CREATE TYPE "STATUS" AS ENUM ('done', 'open', 'deleted');

-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "status" "STATUS" NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
