import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from 'src/entity/comment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommentService {
    constructor(
        @InjectRepository(Comment)
        private readonly commentRepository: Repository<Comment>,
    ){}
    findUserComments(userId:string){
        return 'this is Eric'
    }

    async create(content:string,userId:number): Promise<Comment>{
        const comment = new Comment()
        comment.content = content;
        comment.user={id:userId} as any;
        return this.commentRepository.save(comment)
    }
}
