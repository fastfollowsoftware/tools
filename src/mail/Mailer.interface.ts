import { MailSendOptions } from './MailSendOptions';

export default interface MailerInterface {
  send: (options: MailSendOptions) => Promise<any>;
}
