import { Injectable } from '@nestjs/common';
import { createDto, updateUserDto } from './createDto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) 
        private readonly userRepo: Repository<User>
    ){}
    async findOne(id:number){
       return await this.userRepo.findOne({where:{id:id}})
    }

   async create(create:createDto){
        const user = await this.userRepo.create(create)

        return await this.userRepo.save(user)
    }

    async update ( id:number,updateUser:updateUserDto){
       return await this.userRepo.update(id,updateUser)
    }
}
