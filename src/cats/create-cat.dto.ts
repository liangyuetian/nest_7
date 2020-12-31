import { IsString, IsInt } from 'class-validator';
import {
  ApiProperty,
  ApiPropertyOptional,
  IntersectionType,
  OmitType,
  PartialType,
  PickType,
} from '@nestjs/swagger';

export class CreateCatDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsInt()
  age: number;

  @ApiProperty()
  @IsString()
  breed: string;

  // 可选
  @ApiPropertyOptional()
  list: string[];
}

// 使用 PartialType 将dto变成可选
export class UpdateCatDto extends PartialType(CreateCatDto) {}

// PickTYpe()功能从一个输入类型中选择一部分属性来创建一个新类型（类）
export class UpdateCatAgeDto extends PickType(CreateCatDto, ['age'] as const) {}

// OmitType()函数从一个输入类型中取出所有属性然后移除一些键。
export class UpdateCatOmitDto extends OmitType(CreateCatDto, [
  'name',
] as const) {}

// IntersectionType()函数将两种类型组合成一个新类型（类）。
export class AdditionalCatInfo {}
export class UpdateIntersectionCatDto extends IntersectionType(
  CreateCatDto,
  AdditionalCatInfo,
) {}
