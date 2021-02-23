import { IsNumber, IsString } from 'class-validator';

export class TestBodyDto {
  @IsString()
  url: string; // 要测试的url

  @IsString()
  method: 'get' | 'post';

  @IsNumber()
  number: number; // 递归次数

  body: Record<string, any>; // body 参数

  params: Record<string, any>; // query 参数
}
