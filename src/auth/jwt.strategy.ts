import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './auth.constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      // 配置项信息
      // https://github.com/mikenicholson/passport-jwt#configure-strategy

      // jwtFromRequest 提供从请求中提取 JWT 的方法。我们将使用在 API 请求的授权头中提供token的标准方法。这里描述了其他选项。
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // ignoreExpiration 为了明确起见，我们选择默认的 false 设置，它将确保 JWT 没有过期的责任委托给 Passport 模块。
      // 这意味着，如果我们的路由提供了一个过期的 JWT ，请求将被拒绝，并发送 401 未经授权的响应。护照会自动为我们办理。
      ignoreExpiration: false,
      // secretOrKey 我们使用权宜的选项来提供对称的秘密来签署令牌。其他选项，如 pemo 编码的公钥，可能更适合于生产应用程序(有关更多信息，请参见此处)。
      // 如前所述，无论如何，不要把这个秘密公开。
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
