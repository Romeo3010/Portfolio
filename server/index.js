const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Autorise ton site React à communiquer avec ce serveur
app.use(cors());
app.use(express.json());

// Configuration de l'envoi d'email (Gmail)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// La route (l'URL) que React va appeler
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Tu reçois le mail sur ton adresse
    subject: `Message Portfolio de ${name} : ${subject}`,
    text: `Tu as reçu un nouveau message :\n\nNom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email envoyé !" });
  } catch (error) {
    console.error("Erreur Nodemailer:", error);
    res
      .status(500)
      .json({ success: false, message: "Erreur lors de l'envoi." });
  }
});

// Lancement du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Serveur Backend lancé sur : http://localhost:${PORT}`);
});
