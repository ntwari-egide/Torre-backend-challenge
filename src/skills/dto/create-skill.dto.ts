/**
 * @author: ntwari egide
 * @description: create skill dto
 */

 import { ApiProperty } from "@nestjs/swagger"

 export class CreateSkillsDto {
 
   
     @ApiProperty({
         description: "Skill type id",
         type: String
     })
     skillTypeId: String

     @ApiProperty({
        description: "Skill name",
        type: String
    })
    skillName: String
   
     @ApiProperty({
         description: "Skill description",
         type: String
     })
     skillDescription: String
   
     @ApiProperty({
         description: "Date of creation",
         type: Date
     })
     createdAt: Date
 }
 