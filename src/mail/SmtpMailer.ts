import { SmtpConfig } from './Config';
import { MailSendOptions } from './MailSendOptions';
import nodemailer from 'nodemailer';
import { MailerInterface } from './Mailer.interface';

export class SmtpMailer implements MailerInterface {
  private mailer;

  constructor(config: SmtpConfig) {
    this.mailer = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.tls,
      auth: {
        user: config.username,
        pass: config.password,
      },
    });
  }

  async send(options: MailSendOptions) {
    return await this.mailer.sendMail(options);
  }
}
