import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Configuration du transporteur SMTP avec les détails de votre serveur de messagerie
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Configuration de l'e-mail
    const mailOptions = {
      from: email,
      to: process.env.TO_EMAIL, // L'adresse à laquelle vous voulez envoyer le message
      subject: `Nouveau message de ${name} (${email})`,
      text: message,
    };

    try {
      // Envoyer l'e-mail
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'E-mail envoyé avec succès' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'e-mail' });
    }
  } else {
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}
