/**
 * @author: ntwari egide
 * @description: update skills type dto
 */

 import { ApiProperty } from "@nestjs/swagger"

 export class CreateUserDto {
 
   
     @ApiProperty({
         description: "Skill type name ",
         type: String
     })
     name: String
   
     @ApiProperty({
         description: "skills type description",
         type: String
     })
     description: String
   
     @ApiProperty({
         description: "Date of creation",
         type: Date
     })
     createdAt: Date
 }
 