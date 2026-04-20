import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi...");
    try {
      // Assure-toi que ton backend est lancé sur le port 5000
      await axios.post("http://localhost:5000/api/contact", formData);
      setStatus("✅ Message envoyé avec succès !");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("❌ Erreur serveur. Réessayez plus tard.");
    }
  };

  return (
    <section className="container py-5 text-white" id="contact">
      {/* En-tête de section */}
      <div className="text-center mb-5">
        <h2 className="fw-bold text-uppercase">
          Me <span className="logo-glow">Contacter</span>
        </h2>
        <div
          className="mx-auto"
          style={{
            height: "4px",
            width: "50px",
            background: "var(--primary-glow)",
            borderRadius: "2px",
          }}
        ></div>
      </div>

      <div className="row g-5">
        {/* GAUCHE : COORDONNÉES ET BOUTONS CTA */}
        <div className="col-lg-5">
          <div
            className="glass-card p-4 h-100"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "20px",
            }}
          >
            <h4 className="mb-4 text-white fw-bold">Mes coordonnées</h4>
            <p className="text-secondary small mb-4">
              Besoin d'une réponse rapide ? Utilisez l'un des boutons ci-dessous
              pour me joindre directement sur vos applications préférées.
            </p>

            <div className="d-flex flex-column gap-3">
              {/* WhatsApp */}
              <div
                className="contact-card p-3"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: "15px",
                }}
              >
                <div className="d-flex align-items-center mb-2">
                  <i
                    className="fa-brands fa-whatsapp fs-4 me-3"
                    style={{ color: "#25D366" }}
                  ></i>
                  <div>
                    <div className="small text-secondary">WhatsApp</div>
                    <div className="fw-bold">+261 34 00 000 00</div>
                  </div>
                </div>
                <a
                  href="https://wa.me/261340000000"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm w-100 mt-2 py-2"
                  style={{
                    background: "rgba(37, 211, 102, 0.1)",
                    color: "#25D366",
                    border: "1px solid rgba(37, 211, 102, 0.2)",
                    borderRadius: "8px",
                  }}
                >
                  <i className="fa-solid fa-paper-plane me-2"></i>Envoyez-moi un
                  message
                </a>
              </div>

              {/* Messenger / Facebook */}
              <div
                className="contact-card p-3"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: "15px",
                }}
              >
                <div className="d-flex align-items-center mb-2">
                  <i
                    className="fa-brands fa-facebook-messenger fs-4 me-3"
                    style={{ color: "#1877F2" }}
                  ></i>
                  <div>
                    <div className="small text-secondary">Messenger</div>
                    <div className="fw-bold">Sitraka Roméo</div>
                  </div>
                </div>
                <a
                  href="https://m.me/votre_username"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm w-100 mt-2 py-2"
                  style={{
                    background: "rgba(24, 119, 242, 0.1)",
                    color: "#1877F2",
                    border: "1px solid rgba(24, 119, 242, 0.2)",
                    borderRadius: "8px",
                  }}
                >
                  Discuter sur Facebook
                </a>
              </div>

              {/* Gmail Direct */}
              <div
                className="contact-card p-3"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: "15px",
                }}
              >
                <div className="d-flex align-items-center mb-2">
                  <i
                    className="fa-solid fa-envelope fs-4 me-3"
                    style={{ color: "#EA4335" }}
                  ></i>
                  <div>
                    <div className="small text-secondary">Email personnel</div>
                    <div className="fw-bold text-break">
                      votremail@gmail.com
                    </div>
                  </div>
                </div>
                <a
                  href="mailto:votremail@gmail.com"
                  className="btn btn-sm w-100 mt-2 py-2"
                  style={{
                    background: "rgba(234, 67, 53, 0.1)",
                    color: "#EA4335",
                    border: "1px solid rgba(234, 67, 53, 0.2)",
                    borderRadius: "8px",
                  }}
                >
                  Ouvrir ma messagerie
                </a>
              </div>

              {/* GitHub */}
              <div
                className="contact-card p-3"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: "15px",
                }}
              >
                <div className="d-flex align-items-center mb-2">
                  <i className="fa-brands fa-github fs-4 me-3 text-white"></i>
                  <div>
                    <div className="small text-secondary">GitHub</div>
                    <div className="fw-bold">@votre_github</div>
                  </div>
                </div>
                <a
                  href="https://github.com/votre_github"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm w-100 mt-2 py-2 text-white"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "8px",
                  }}
                >
                  Voir mes dépôts
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* DROITE : FORMULAIRE DE CONTACT */}
        <div className="col-lg-7">
          <div
            className="glass-card p-4 h-100"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "20px",
            }}
          >
            <h4 className="mb-4 text-white fw-bold">Écrivez-moi</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label small text-secondary">
                  Votre nom complet
                </label>
                <input
                  className="form-control bg-dark border-secondary text-white py-2"
                  placeholder="Ex: Jean Dupont"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label small text-secondary">
                  Adresse email
                </label>
                <input
                  type="email"
                  className="form-control bg-dark border-secondary text-white py-2"
                  placeholder="nom@exemple.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label small text-secondary">
                  Votre message
                </label>
                <textarea
                  className="form-control bg-dark border-secondary text-white py-2"
                  placeholder="Comment puis-je vous aider ?"
                  rows="6"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>
              <button
                className="btn w-100 py-3 fw-bold text-white shadow-lg"
                style={{
                  borderRadius: "12px",
                  background: "var(--primary-glow)",
                  border: "none",
                  transition: "0.3s",
                }}
              >
                Envoyer le formulaire{" "}
                <i className="fa-solid fa-paper-plane ms-2"></i>
              </button>
            </form>

            {status && (
              <div
                className={`mt-4 p-3 rounded text-center fw-medium ${status.includes("✅") ? "bg-success text-white" : "bg-danger text-white"} bg-opacity-25`}
              >
                {status}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Styles internes pour les effets de survol */}
      <style>{`
        .contact-card {
          transition: transform 0.3s ease, background 0.3s ease;
        }
        .contact-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.08) !important;
        }
        .form-control:focus {
          background-color: #111 !important;
          border-color: var(--primary-glow) !important;
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.2);
          color: white;
        }
        .btn:hover {
          filter: brightness(1.2);
        }
      `}</style>
    </section>
  );
}
