import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { createDto, updateUserDto } from './createDto';
import { UserService } from './user.service';
import { CommentService } from 'src/comment/comment.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly commentService: CommentService,
  ) {}

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Get()
  findAllUsers() {
    return 'all users';
  }

  @Post()
  create(@Body() create: createDto) {
    return this.userService.create(create);
  }

  @Get(':id/comments')
  getUserComment(@Param('id') id: string) {
    return this.commentService.findUserComments(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateUser: updateUserDto) {
    return this.userService.update(id, updateUser);
  }
}
