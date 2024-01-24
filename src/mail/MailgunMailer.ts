import { MailgunConfig } from './Config';
import { MailSendOptions } from './MailSendOptions';
import FormData from 'form-data';
import Mailgun from 'mailgun.js';
import { MailerInterface } from './Mailer.interface';

export class MailgunMailer implements MailerInterface {
  private config: MailgunConfig;
  private mailgun;

  constructor(config: MailgunConfig) {
    this.config = config;

    const mailgun = new Mailgun(FormData);
    this.mailgun = mailgun.client({
      username: 'api',
      key: this.config.apiKey,
    });
  }

  async send(options: MailSendOptions) {
    return await this.mailgun.messages.create(this.config.domain, options);
  }
}
