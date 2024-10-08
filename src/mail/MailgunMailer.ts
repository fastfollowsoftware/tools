import { MailgunConfig } from './Config';
import { MailSendOptions } from './MailSendOptions';
import FormData from 'form-data';
import Mailgun, { MailgunMessageData } from 'mailgun.js';
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
    const mailgunOptions: MailgunMessageData = {
      from: options.from,
      to: options.to,
      subject: options.subject,
      html: options.html,
      bcc: options.bcc,
      attachment: options.attachments?.map((attachment) => ({
        data: attachment.content,
        filename: attachment.filename,
      })),
    };

    if (options.replyTo) {
      mailgunOptions['h:Reply-To'] = options.replyTo;
    }

    return await this.mailgun.messages.create(
      this.config.domain,
      mailgunOptions
    );
  }
}
