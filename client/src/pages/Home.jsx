import React from "react";
import profilImg from "../assets/img/profil/portfolio.png";

export default function Home() {
  return (
    <>
      <section className="container py-5 mt-lg-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-7 text-start">
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

            <h1
              className="fw-bold mb-4 text-white"
              style={{ lineHeight: "1.2" }}
            >
              Je suis <br />
              <span className="logo-glow">RAKOTOARISOA Sitraka Roméo</span>
            </h1>

            <p className="text-secondary mb-4" style={{ maxWidth: "500px" }}>
              Un développeur motivé. J'aime apprendre tous les jours pour
              devenir le meilleur.
            </p>

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

            <div className="d-flex flex-wrap gap-3">
              <button
                type="button"
                className="btn btn-cv-outline px-4 py-2 d-inline-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#cvModal"
              >
                <i className="fa-solid fa-file-pdf me-2 text-danger"></i> Voir
                mon CV
              </button>
            </div>
          </div>

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

      {/* MODAL CORRIGÉE (sans tabIndex pour éviter le bug backdrop) */}
      <div
        className="modal fade"
        id="cvModal"
        aria-labelledby="cvModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div
            className="modal-content"
            style={{
              background: "#0f0f0f",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "20px",
            }}
          >
            <div className="modal-header border-bottom border-secondary p-3">
              <h5
                className="modal-title text-white small fw-bold text-uppercase"
                id="cvModalLabel"
              >
                <i className="fa-solid fa-eye me-2"></i> Aperçu du CV
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-0" style={{ height: "75vh" }}>
              <iframe
                src="/assets/documents/mon_cv.pdf"
                width="100%"
                height="100%"
                style={{ border: "none" }}
                title="Mon CV"
              />
            </div>
            <div className="modal-footer border-top border-secondary">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Fermer
              </button>
              <a
                href="/assets/documents/mon_cv.pdf"
                download
                className="btn btn-primary"
                style={{ background: "var(--primary-glow)", border: "none" }}
              >
                Télécharger
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
