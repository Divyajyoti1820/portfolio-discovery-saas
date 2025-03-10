/*
  Warnings:

  - A unique constraint covering the columns `[profileId]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileId` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "profileId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "user_profileId_key" ON "user"("profileId");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
