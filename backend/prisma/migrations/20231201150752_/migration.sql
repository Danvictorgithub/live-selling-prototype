/*
  Warnings:

  - You are about to drop the `messages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "messages";

-- CreateTable
CREATE TABLE "message" (
    "id" SERIAL NOT NULL,
    "user" TEXT NOT NULL,
    "message" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "message_id_key" ON "message"("id");
