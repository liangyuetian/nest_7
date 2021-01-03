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

export class UpdateTutorialsDto {
  @IsInt()
  @Min(1, {
    message: 'id: 不能小于1',
  })
  @Max(1000000, {
    message: 'id: 不能大于1000000',
  })
  id: number;

  @IsString()
  @Length(1, 20)
  name: string;

  @IsEmail()
  @Contains('@outlook.com', {
    message: 'mail: 请填写outlook邮箱',
  })
  email: string;

  @IsOptional()
  @IsArray()
  table_of_contents: string[];
}
