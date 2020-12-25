import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req.user;
  },
);

// 使用
// @Query(returns => User)
// @UseGuards(GqlAuthGuard)
// whoAmI(@CurrentUser() user: User) {
//   return this.userService.findById(user.id);
// }
