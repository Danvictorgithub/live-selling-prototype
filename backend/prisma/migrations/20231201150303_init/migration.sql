-- CreateTable
CREATE TABLE "messages" (
    "id" SERIAL NOT NULL,
    "user" TEXT NOT NULL,
    "message" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "messages_id_key" ON "messages"("id");
