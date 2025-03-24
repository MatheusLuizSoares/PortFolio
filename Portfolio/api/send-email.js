import nodemailer from 'nodemailer';

export default async (req, res) => {
  const { nome, email, assunto, mensagem } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: email,
    to: 'matheusluiz15a@gmail.com',
    subject: `Portfólio: ${assunto}`,
    text: `Nome: ${nome}\n\nMensagem: ${mensagem}`
  });

  res.status(200).json({ success: true });
};