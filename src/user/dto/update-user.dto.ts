import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({
        description: "Array fo string roles",
        default: 1,
        type: Number
    })
    role: Number


    @ApiProperty({
        description: "Email of new user",
        default: 'example@email.com',
        type: String
    })
    email: String
  
    @ApiProperty({
        description: "User name of new user",
        default: 'usernameexample',
        type: String
    })
    username: String
  
    @ApiProperty({
        description: "Password of new user",
        default: 'Example@2021',
        minimum: 8,
        type: String
    })
    password: String
  
    @ApiProperty({
        description: "Date of signup",
        type: Date
    })
    joinedAt: Date

    @ApiProperty({
        description: "Date of profile update",
        type: Date
    })
    updatedAt: Date
}
