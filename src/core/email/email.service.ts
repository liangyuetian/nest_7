import { Injectable } from '@nestjs/common';
import { createTestAccount, createTransport, TestAccount } from 'nodemailer';

// 发送邮件
@Injectable()
export class EmailService {
  testAccount: TestAccount;
  static createTransport = createTransport;
  constructor() {
    // this.sendMail({});
  }

  async getTestAccount() {
    this.testAccount = await createTestAccount();
    console.log('创建测试邮箱服务器成功', this.testAccount);
    return this.testAccount;
  }

  async getTransporter() {
    await this.getTestAccount();
    return createTransport({
      host: this.testAccount.smtp.host,
      port: this.testAccount.smtp.port,
      auth: {
        user: this.testAccount.user,
        pass: this.testAccount.pass,
      },
    });
  }

  async sendMail({}) {
    const transporter = await this.getTransporter();
    return transporter
      .sendMail({
        from: `"${this.testAccount.user}" ${this.testAccount.user}`,
        to: 'pt_liangyue@outlook.com',
        subject: 'nodemailer',
        html: '<h1>测试 nodemailer</h1>',
      })
      .then((res) => {
        console.log('res', res);
      })
      .catch((err) => {
        console.log('err', err);
      });
  }
}
