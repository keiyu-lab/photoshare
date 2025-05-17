/*
  Warnings:

  - Added the required column `updated_at` to the `Album` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Photo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Album" DROP CONSTRAINT "Album_parent_album_id_fkey";

-- AlterTable
ALTER TABLE "Album" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "is_deleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "parent_album_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Photo" ADD COLUMN     "is_deleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "Album" ADD CONSTRAINT "Album_parent_album_id_fkey" FOREIGN KEY ("parent_album_id") REFERENCES "Album"("id") ON DELETE SET NULL ON UPDATE CASCADE;
