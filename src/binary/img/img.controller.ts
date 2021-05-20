import { Controller, Get, Res } from '@nestjs/common';
import { join } from 'path';
import { readFile, readFileSync } from 'fs';
import { promisify } from 'util';
import * as puppeteer from 'puppeteer';

const readFilePromise = promisify(readFile);
let browser: puppeteer.Browser;
puppeteer.launch().then((b) => (browser = b));

@Controller('binary/img')
export class ImgController {
  @Get()
  async img(@Res() response) {
    // const img = await readFilePromise('./1611743954016.jpg');
    // const img = readFileSync(join(__dirname, './1611743954016.jpg'));
    // const img = await readFilePromise(join(__dirname, './1611743954016.jpg'));
    // response.send(img);
    const page = await browser.newPage();
    await page.setContent(`
      <h1>测试 setContent</h1>
      <div>231</div>
      <style>
      h1 {
        color: red;
        }
        div {
        color: firebrick;
        }
      </style>
    `);
    const img = await page.screenshot({
      fullPage: true,
      // clip: {
      //   x: 0,
      //   y: 0,
      //   width: 100,
      //   height: 200,
      // },
    });
    response.send(img);
    // return img;
    // return Buffer.from(img, 'binary');
  }
}
