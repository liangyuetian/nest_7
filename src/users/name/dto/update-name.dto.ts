import {
  IsString,
  IsInt,
  IsArray,
  Length,
  Contains,
  Min,
  Max,
  IsEmpty,
  ValidateIf,
  IsDefined, IsOptional
} from "class-validator";
import {
  ApiProperty,
  ApiPropertyOptional,
  IntersectionType,
  OmitType,
  PartialType,
  PickType,
} from '@nestjs/swagger';
import { IsNull } from 'typeorm';

export class UpdateNameDto {
  @IsInt()
  @Min(1, {
    message: '不能小于1',
  })
  @Max(1000000, {
    message: '不能大于1000000',
  })
  id: number;

  @Length(1, 20)
  // @Contains('hello')
  name: string;

  // @IsEmpty()
  // @IsDefined() // 如果设置了 skipMissingProperties: true, 则依旧校验此属性
  @IsOptional() // 如果不存在就不校验
  @IsArray()
  description: string[];
}
