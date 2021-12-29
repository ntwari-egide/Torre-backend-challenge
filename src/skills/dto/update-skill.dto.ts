/**
 * @author: ntwari egide
 * @description: update skill dto
 */

 import { ApiProperty } from "@nestjs/swagger"

 export class UpdateSkillsDto {
 
    @ApiProperty({
        description: "Skill type id",
        type: String
    })
    skillTypeId: String
    
     @ApiProperty({
         description: "Skill name",
         default: 'usernameexample',
         type: String
     })
     skillName: String
   
     @ApiProperty({
         description: "Skill description",
         default: 'Example@2021',
         minimum: 8,
         type: String
     })
     skillDescription: String
   
     @ApiProperty({
         description: "Date of creation",
         type: Date
     })
     createdAt: Date
 }
 