/*
  Warnings:

  - A unique constraint covering the columns `[clientId]` on the table `ClientToUser` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ClientToUser_clientId_key" ON "ClientToUser"("clientId");
