/*
  Warnings:

  - You are about to drop the column `user` on the `message` table. All the data in the column will be lost.
  - Added the required column `name` to the `message` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "message" DROP COLUMN "user",
ADD COLUMN     "name" TEXT NOT NULL;
