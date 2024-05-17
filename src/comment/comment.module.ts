import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { UserService } from 'src/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Comment])],
  providers: [CommentService],
  controllers:[Comment]
})
export class CommentModule {}
