/*
  Warnings:

  - Added the required column `description` to the `Program` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Program` ADD COLUMN `description` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Set` MODIFY `weight` INTEGER NOT NULL DEFAULT 0;
