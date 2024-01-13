/*
  Warnings:

  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id` to the `FollowingConnection` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Comment_authorId_key` ON `comment`;

-- DropIndex
DROP INDEX `FollowingConnection_followerId_key` ON `followingconnection`;

-- DropIndex
DROP INDEX `FollowingConnection_followingId_key` ON `followingconnection`;

-- DropIndex
DROP INDEX `Like_userId_key` ON `like`;

-- DropIndex
DROP INDEX `Post_authorId_key` ON `post`;

-- AlterTable
ALTER TABLE `comment` MODIFY `authorId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `emailverificationtoken` MODIFY `user_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `followingconnection` ADD COLUMN `id` BIGINT NOT NULL AUTO_INCREMENT,
    MODIFY `followerId` VARCHAR(191) NOT NULL,
    MODIFY `followingId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `key` MODIFY `user_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `like` MODIFY `userId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `passwordresettoken` MODIFY `user_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `post` MODIFY `authorId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `session` MODIFY `user_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE INDEX `Comment_postId_idx` ON `Comment`(`postId`);

-- CreateIndex
CREATE INDEX `Comment_authorId_idx` ON `Comment`(`authorId`);

-- CreateIndex
CREATE INDEX `FollowingConnection_followerId_idx` ON `FollowingConnection`(`followerId`);

-- CreateIndex
CREATE INDEX `FollowingConnection_followingId_idx` ON `FollowingConnection`(`followingId`);

-- CreateIndex
CREATE INDEX `Like_userId_idx` ON `Like`(`userId`);

-- CreateIndex
CREATE INDEX `Like_postId_idx` ON `Like`(`postId`);

-- CreateIndex
CREATE INDEX `Post_authorId_idx` ON `Post`(`authorId`);

-- CreateIndex
CREATE INDEX `Post_id_idx` ON `Post`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `User_id_key` ON `User`(`id`);
