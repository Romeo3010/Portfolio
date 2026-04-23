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
      await axios.post("http://localhost:5000/api/contact", formData);
      setStatus("✅ Message envoyé  !");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("❌ Erreur serveur. Réessayez plus tard.");
    }
  };

  return (
    <section className="container py-5 text-white" id="contact">
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
        <div className="col-lg-5">
          <div
            className="glass-card p-4 h-100"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "20px",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <h4 className="mb-4 text-white fw-bold">Mes coordonnées</h4>
            <p className="text-secondary small mb-4">
              Besoin d'une réponse rapide ? Utilisez l'un des boutons ci-dessous
              pour me joindre directement.
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
                    <div className="fw-bold">+261 34 97 422 14</div>
                  </div>
                </div>
                <a
                  href="https://wa.me/261349742214"
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
                  <i className="fa-solid fa-paper-plane me-2"></i>Envoyer un
                  message
                </a>
              </div>

              {/* Messenger */}
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
                    <div className="fw-bold">Sitraka Rakotoarisoa</div>
                  </div>
                </div>
                <a
                  href="https://m.me/sitraka.rakotoarisoa.414945"
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
                  Discuter sur Messenger
                </a>
              </div>

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
                    <div className="fw-bold text-break small">
                      sitrakasitrakaromeo@gmail.com
                    </div>
                  </div>
                </div>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sitrakasitrakaromeo@gmail.com&su=Contact+depuis+Portfolio"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm w-100 mt-2 py-2"
                  style={{
                    background: "rgba(234, 67, 53, 0.1)",
                    color: "#EA4335",
                    border: "1px solid rgba(234, 67, 53, 0.2)",
                    borderRadius: "8px",
                  }}
                >
                  Ouvrir Gmail
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
                    <div className="fw-bold">@Romeo3010</div>
                  </div>
                </div>
                <a
                  href="https://github.com/Romeo3010"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm w-100 mt-2 py-2 text-white"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "8px",
                  }}
                >
                  Voir mes projets
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-7">
          <div
            className="glass-card p-4 h-100"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "20px",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <h4 className="mb-4 text-white fw-bold">Écrivez-moi</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label small text-secondary">
                  Votre nom complet
                </label>
                <input
                  type="text"
                  className="form-control bg-dark border-secondary text-white py-2"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  placeholder="Jean Dupont"
                />
              </div>
              <div className="mb-3">
                <label className="form-label small text-secondary">
                  Adresse email
                </label>
                <input
                  type="email"
                  className="form-control bg-dark border-secondary text-white py-2"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  placeholder="nom@exemple.com"
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
                type="submit"
                disabled={status === "Envoi..."}
                className="btn w-100 py-3 fw-bold text-white shadow-lg"
                style={{
                  borderRadius: "12px",
                  background:
                    status === "Envoi..." ? "#666" : "var(--primary-glow)",
                  border: "none",
                  transition: "0.3s",
                }}
              >
                {status === "Envoi..."
                  ? "envoi en cours..."
                  : "Envoyer le message"}
                <i className="fa-solid fa-paper-plane ms-2"></i>
              </button>
            </form>
            {status && status !== "Envoi..." && (
              <div
                className={`mt-4 p-3 rounded text-center fw-medium ${status.includes("✅") ? "bg-success text-white" : "bg-danger text-white"} bg-opacity-25`}
              >
                {status}
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-card { transition: transform 0.3s ease, background 0.3s ease; }
        .contact-card:hover { transform: translateY(-5px); background: rgba(255, 255, 255, 0.08) !important; }
        .form-control { background-color: rgba(0,0,0,0.2) !important; }
        .form-control:focus { background-color: #111 !important; border-color: #a855f7 !important; box-shadow: 0 0 10px rgba(168, 85, 247, 0.2); color: white; }
        .btn:hover:not(:disabled) { filter: brightness(1.2); transform: scale(1.01); }
      `}</style>
    </section>
  );
}
