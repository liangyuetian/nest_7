import {
  IsString,
  IsInt,
  IsArray,
  Length,
  Contains,
  Min,
  Max,
  ValidateIf,
  IsDefined,
  IsOptional,
  IsEmail,
} from 'class-validator';
import {
  ApiProperty,
  ApiPropertyOptional,
  IntersectionType,
  OmitType,
  PartialType,
  PickType,
} from '@nestjs/swagger';

export enum UserRole {
  Admin = 'Admin',
  Moderator = 'Moderator',
  User = 'User',
}

export enum RoleEnum {
  Admin = 'Admin',
  Moderator = 'Moderator',
  User = 'User',
}

export class UpdateTutorialsDto {
  @ApiProperty({ description: 'id', minimum: 1, maximum: 1000000 })
  @IsInt()
  @Min(1, {
    message: 'id: 不能小于1',
  })
  @Max(1000000, {
    message: 'id: 不能大于1000000',
  })
  id: number;

  @ApiProperty({ description: '名字', minLength: 1, maxLength: 20 })
  @IsString()
  @Length(1, 20)
  name: string;

  @ApiProperty({ description: '邮箱', enum: ['*@outlook.com', '*@gmail.com'] })
  @IsEmail()
  @Contains('@outlook.com', {
    message: 'mail: 请填写outlook邮箱',
  })
  email: string;

  @ApiPropertyOptional({
    enum: UserRole,
    enumName: 'UserRole',
  })
  @IsOptional()
  table_of_contents: UserRole;

  /**
   * A list of user's roles
   * @example ['admin']
   */
  roles: RoleEnum[] = [];
}
