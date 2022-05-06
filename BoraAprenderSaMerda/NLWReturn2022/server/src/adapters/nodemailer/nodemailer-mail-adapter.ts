import { MailAdapter, SendMailData } from './../mail-adapter';
import nodemailer from "nodemailer"

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e1bb652140fed7",
    pass: "00e01d1e17006a"
  }
});

export class NodemailerMailAdapter implements MailAdapter {

  async sendMail({ subject, body }: SendMailData) {
     await transport.sendMail({
    from: 'Equipe FeedGet <oi@feedget.com>',
    to: 'João Lucas <joaolucasfreitaslul@gmail.com>',
    subject,
    html: body
  });

  }
}