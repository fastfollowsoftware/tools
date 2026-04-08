import sgMail from '@sendgrid/mail';
import { SendGridConfig } from './Config';
import { MailSendOptions } from './MailSendOptions';
import { MailerInterface } from './Mailer.interface';

// Note: @sendgrid/mail's setApiKey mutates the singleton's process-global state.
// Unlike SmtpMailer/MailgunMailer (per-instance clients), instantiating two
// SendGridMailer objects with different API keys will cause the second
// setApiKey call to silently override the first. Acceptable for the typical
// single-account consumer; revisit only if multi-account support is required.
export class SendGridMailer implements MailerInterface {
  constructor(config: SendGridConfig) {
    sgMail.setApiKey(config.apiKey);
  }

  async send(options: MailSendOptions) {
    return await sgMail.send({
      from: options.from!,
      to: options.to,
      subject: options.subject,
      html: options.html,
      bcc: options.bcc,
      replyTo: options.replyTo,
      attachments: options.attachments?.map((attachment) => ({
        filename: attachment.filename,
        content: attachment.content.toString('base64'),
        disposition: 'attachment',
      })),
    });
  }
}
