/*
  Warnings:

  - You are about to drop the column `uaTitle` on the `Role` table. All the data in the column will be lost.
  - Added the required column `image` to the `Role` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Role` DROP COLUMN `uaTitle`,
    ADD COLUMN `image` VARCHAR(191) NOT NULL;
