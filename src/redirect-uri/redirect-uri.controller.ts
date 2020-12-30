import { Controller, Get, Query, Response } from '@nestjs/common';

@Controller('wx-redirect-uri')
export class RedirectUriController {
  @Get()
  redirect(@Query() query: any, @Response() res) {
    console.log(query);
    // eslint-disable-next-line prefer-const
    let { url, ...result } = query;
    url = new URL(url);
    const params = new URLSearchParams(result); // code,state
    const search = new URLSearchParams(url.search);
    for (const key of params.keys()) {
      search.append(key, params.get(key));
    }
    url.search = search;

    res.redirect(url.href);
  }
}
