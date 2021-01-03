# 代码风格指南

[代码风格指南：https://angular.cn/guide/styleguide](https://angular.cn/guide/styleguide)

# 请求生命周期大致如下：

1. 收到请求
2. 全局绑定的中间件
3. 模块绑定的中间件
4. 全局守卫
5. 控制层守卫
6. 路由守卫
7. 全局拦截器（控制器之前）
8. 控制器层拦截器 （控制器之前）
9. 路由拦截器 （控制器之前）
10. 全局管道
11. 控制器管道
12. 路由管道
13. 路由参数管道
14. 控制器（方法处理器） 15。服务（如果有）
15. 路由拦截器（请求之后）
16. 控制器拦截器 （请求之后）
17. 全局拦截器 （请求之后）
18. 异常过滤器 （路由，之后是控制器，之后是全局）
19. 服务器响应


# 常用状态码

* 200 OK - [GET]：服务器成功返回用户请求的数据，该操作是幂等的（Idempotent）。
* 201 CREATED - [POST/PUT/PATCH]：用户新建或修改数据成功。
* 202 Accepted - [*]：表示一个请求已经进入后台排队（异步任务）
* 204 NO CONTENT - [DELETE]：用户删除数据成功。
* 400 INVALID REQUEST - [POST/PUT/PATCH]：用户发出的请求有错误，服务器没有进行新建或修改数据的操作，该操作是幂等的。
* 401 Unauthorized - [*]：表示用户没有权限（令牌、用户名、密码错误）。
* 403 Forbidden - [*] 表示用户得到授权（与401错误相对），但是访问是被禁止的。
* 404 NOT FOUND - [*]：用户发出的请求针对的是不存在的记录，服务器没有进行操作，该操作是幂等的。
* 406 Not Acceptable - [GET]：用户请求的格式不可得（比如用户请求JSON格式，但是只有XML格式）。
* 410 Gone -[GET]：用户请求的资源被永久删除，且不会再得到的。
* 422 Unprocesable entity - [POST/PUT/PATCH] 当创建一个对象时，发生一个验证错误。
* 500 INTERNAL SERVER ERROR - [*]：服务器发生错误，用户将无法判断发出的请求是否成功。

> 状态码的完全列表参见[这里](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)

# 常用校验器

## 常见的验证修饰器
* @IsDefined(value: any)	检查是否定义了值（！= 未定义，！= null）。这是唯一忽略跳过属性选项的修饰器。
* @IsOptional()	检查给定值是否为空（= null，= 未定义），如果为，则忽略属性上的所有验证器。
* @Equals(comparison: any)	检查值是否等于 （"+"） 比较。
* @NotEquals(comparison: any)	检查值是否不相等 （"！="） 比较。
* @IsEmpty()	如果给定值为空，检查是否为空值（='，=null，==未定义）。
* @IsNotEmpty()	如果给定值不为空，则检查 （！\ '，！\ null，！ = 未定义）。
* @IsIn(values: any[])	检查值是否位于允许值的数组中。
* @IsNotIn(values: any[])	检查值是否不在不允许的值数组中。

## 类型验证修饰器
* @IsBoolean()	检查值是否为布尔值。
* @IsDate()	检查该值是否为日期。
* @IsString()	检查字符串是否为字符串。
* @IsNumber(options: IsNumberOptions)	检查该值是否为数字。
* @IsInt()	检查该值是否为整数数字。
* @IsArray()	检查该值是否为数组
* @IsEnum(entity: object)	检查该值是否为有效表示

## 数字验证修饰器	
* @IsDivisibleBy(num: number)	检查该值是否为可被另一个值除除的数字。
* @IsPositive()	检查该值是否为大于零的正数。
* @IsNegative()	检查该值是否为小于零的负数。
* @Min(min: number)	检查给定数字是否大于或等于给定数字。
* @Max(max: number)	检查给定数字是否小于或等于给定数字。

## 日期验证修饰器	
* @MinDate(date: Date)	检查该值是否为指定日期之后的日期。
* @MaxDate(date: Date)	检查该值是否为指定日期之前的日期。


# [FAQ](https://docs.nestjs.cn/7/faq)

1. 过滤器
> 过滤器是唯一一个不按照全局第一顺序执行的组件。而是会从最低层次开始处理，也就是说先从任何路由绑定的过滤器开始，然后是控制器层，最后才是全局过滤器。注意，异常无法从过滤器传递到另一个过滤器；如果一个路由层过滤器捕捉到一个异常，一个控制器或者全局层面的过滤器就捕捉不到这个异常。如果要实现类似的效果可以在过滤器之间使用继承。

2. 拦截器

> 拦截器在大部分情况下和守卫类似。只有一种情况例外：当拦截器返回的是一个RxJS Observables时，observables是以先进后出的顺序执行的。因此，入站请求是按照标准的全局、控制器和路由层次执行的，但请求的响应侧（例如，当从一个控制器方法的处理器返回时）则是从路由到控制器再到全局。另外，由管道、控制器或者服务抛出的任何错误都可以在拦截器的catchError操作者中被读取。

3. 全局路由前缀

```javascript
const app = await NestFactory.create(ApplicationModule);
app.setGlobalPrefix('v1');
```
