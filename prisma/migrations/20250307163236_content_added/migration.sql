/*
  Warnings:

  - Added the required column `content` to the `FormSubmissons` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FormSubmissons" ADD COLUMN     "content" TEXT NOT NULL;
