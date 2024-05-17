import { IsEmail, IsNumberString, IsString } from "class-validator"
import {PartialType} from '@nestjs/mapped-types'
export class createDto{
    @IsString()
    name:string
    @IsEmail()
    email:string
    @IsString()
    password:string
   

}

export class updateUserDto extends PartialType(createDto){}