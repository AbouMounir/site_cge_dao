import nodemailer from 'nodemailer';

export async function POST(req) {
  if (req.method === 'POST') {
    const body = await req.json();  // Utilisez .json() pour obtenir les données du corps de la requête
    console.log(body);
    const { prenom, nom, email, tel, objet, message } = body;
    console.log(`${nom} avec mail ${email} envoie le message : ${message}`);
    
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
      subject: `Nouveau message de ${nom} ${prenom} : (email : ${email} && tel ${tel})`,
      text: `objet : ${objet} et message : ${message}`,
    };

    try {
      // Envoyer l'e-mail
      //await transporter.sendMail(mailOptions);
      return new Response(
        JSON.stringify({ message: 'E-mail envoyé avec succès',status: 200}),
        {
          status: 200, // Statut de réussite
        }
      );
    } catch (error) {
      console.log(error);
      return new Response(
        JSON.stringify({ error: 'Erreur lors de l\'envoi de l\'e-mail' }),
        {
          status: 500,
        }
      );
    }
  } else {
    console.log(`else ${error}`);
    return new Response(
      JSON.stringify({ error: 'Méthode non autorisée' }),
      {
        status: 500,
      }
    );
  }
}
