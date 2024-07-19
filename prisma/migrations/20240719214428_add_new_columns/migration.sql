/*
  Warnings:

  - Added the required column `about` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stack` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "about" TEXT NOT NULL,
                    ADD COLUMN     "stack" TEXT NOT NULL;
