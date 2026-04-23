import React from "react";
import { Link } from "react-router-dom";
import profilImg from "../assets/img/profil/portfolio.png";

export default function Home() {
  return (
    <>
      <section className="container py-5 mt-lg-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-7 text-start">
            {/* BADGE CATEGORIE */}
            <div
              className="d-inline-flex align-items-center px-3 py-1 mb-3"
              style={{
                background: "rgba(168, 85, 247, 0.1)",
                color: "var(--primary-glow)",
                borderRadius: "6px",
                fontSize: "0.75rem",
                fontWeight: "700",
              }}
            >
              <i className="fa-solid fa-code me-2"></i> DÉVELOPPEUR WEB
            </div>

            {/* TITRE PRINCIPAL */}
            <h1
              className="fw-bold mb-4 text-white"
              style={{ lineHeight: "1.2" }}
            >
              Je suis <br />
              <span className="logo-glow">RAKOTOARISOA Sitraka Roméo</span>
            </h1>

            {/* DESCRIPTION */}
            <p className="text-secondary mb-4" style={{ maxWidth: "500px" }}>
              Un développeur motivé. J'aime apprendre tous les jours pour
              devenir le meilleur.
            </p>

            {/* RÉSEAUX SOCIAUX */}
            <div className="d-flex gap-3 mb-5">
              <a href="#" className="social-link">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>

            {/* BOUTONS D'ACTION */}
            <div className="d-flex flex-wrap gap-3">
              {/* BOUTON VERS LA PAGE PROJETS */}
              <Link
                to="/projects"
                className="btn px-4 py-2 d-inline-flex align-items-center text-white fw-bold"
                style={{
                  background: "var(--primary-glow)",
                  borderRadius: "8px",
                  border: "none",
                  transition: "0.3s",
                  textDecoration: "none",
                }}
              >
                <i className="fa-solid fa-rocket me-2"></i>
                Voir mes projets
              </Link>

              {/* BOUTON CV (Appelle la modale définie dans App.jsx) */}
              <button
                type="button"
                className="btn btn-cv-outline px-4 py-2 d-inline-flex align-items-center text-white"
                data-bs-toggle="modal"
                data-bs-target="#cvModal"
                style={{
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "8px",
                  color: "white",
                }}
              >
                <i className="fa-solid fa-file-pdf me-2 text-danger"></i>
                Voir mon CV
              </button>
            </div>
          </div>

          {/* IMAGE DE PROFIL */}
          <div className="col-lg-5 text-center">
            <div
              className="glass-card p-2 rounded-circle shadow-lg"
              style={{
                width: "280px",
                height: "280px",
                margin: "0 auto",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <img
                src={profilImg}
                alt="Sitraka Roméo"
                className="img-fluid rounded-circle h-100 w-100"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
