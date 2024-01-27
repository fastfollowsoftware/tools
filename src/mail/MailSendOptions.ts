export type MailSendOptions = {
  from?: string;
  to: string | string[];
  subject: string;
  html: string;
  bcc?: string | string[];
};
