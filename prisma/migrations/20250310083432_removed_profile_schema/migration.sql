/*
  Warnings:

  - You are about to drop the column `profileId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_profileId_fkey";

-- DropIndex
DROP INDEX "user_profileId_key";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "profileId";

-- DropTable
DROP TABLE "Profile";
