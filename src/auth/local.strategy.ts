import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ContextIdFactory, ModuleRef } from '@nestjs/core';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService,
    private moduleRef: ModuleRef,
  ) {
    super({
      // 请求范围策略 https://docs.nestjs.cn/7/techniques?id=%e8%af%b7%e6%b1%82%e8%8c%83%e5%9b%b4%e7%ad%96%e7%95%a5
      passReqToCallback: true,
    });
  }

  // async validate(username: string, password: string): Promise<any> {
  //   const user = await this.authService.validateUser(username, password);
  //   if (!user) {
  //     throw new UnauthorizedException();
  //   }
  //   return user;
  // }

  async validate(request: Request, username: string, password: string) {
    const contextId = ContextIdFactory.getByRequest(request);
    // "AuthService" is a request-scoped provider
    const authService = await this.moduleRef.resolve(AuthService, contextId);
    return true;
  }
}
