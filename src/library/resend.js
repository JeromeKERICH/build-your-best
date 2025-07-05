import { Resend } from 'resend'

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY)

export const sendEmail = async (data) => {
  return await resend.emails.send({
    from: 'Brenda <hello@buildyourbest.com>',
    to: data.email,
    subject: data.subject,
    html: `<strong>${data.message}</strong>`,
  });
}
