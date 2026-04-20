import React, { useState } from "react";

import imgSmartTicket from "../assets/img/project/smart-ticket.jpg";
import imgTodoList from "../assets/img/project/todo.png";
import imgMiniJeu from "../assets/img/project/pfc.jpg";
import imgIsfpsactus from "../assets/img/project/isfps.jpg";
import imgPortfolio from "../assets/img/project/portfolio.png";
import imgIsfps from "../assets/img/project/logo ISFPS.jpg";

export default function Projets() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Dictionnaire des icônes pour automatiser l'affichage
  const techIcons = {
    React: { icon: "fa-brands fa-react", color: "#61DAFB" },
    "Node.js": { icon: "fa-brands fa-node-js", color: "#339933" },
    MongoDB: { icon: "fa-solid fa-database", color: "#47A248" },
    JavaScript: { icon: "fa-brands fa-js", color: "#F7DF1E" },
    Bootstrap: { icon: "fa-brands fa-bootstrap", color: "#7952B3" },
    CSS3: { icon: "fa-brands fa-css3-alt", color: "#1572B6" },
    HTML5: { icon: "fa-brands fa-html5", color: "#E34F26" },
    PHP: { icon: "fa-brands fa-php", color: "#777BB4" },
    MySQL: { icon: "fa-solid fa-server", color: "#4479A1" },
    Firebase: { icon: "fa-solid fa-fire", color: "#FFCA28" },
  };

  // Liste de tes vrais projets GitHub
  const projects = [
    {
      id: 1,
      title: "Smart Ticket",
      description: "Système de billetterie et gestion d'accès par QR Code.",
      longDescription:
        "Une application fullstack permettant la gestion des réservations, la génération de tickets uniques et un système de scan pour valider les entrées en temps réel.",
      tech: ["React", "Node.js", "MongoDB"],
      image: imgSmartTicket,
      github: "https://github.com/Romeo3010/Smart-ticket",
    },
    {
      id: 2,
      title: "To-Do List",
      description: "Gestionnaire de tâches avec interface intuitive.",
      longDescription:
        "Un outil d'organisation permettant de lister, filtrer et sauvegarder ses tâches quotidiennes. Focus sur l'expérience utilisateur et le responsive design.",
      tech: ["JavaScript", "HTML5", "CSS3"],
      image: imgTodoList,
      github: "https://github.com/Romeo3010/to-do-list",
    },
    {
      id: 3,
      title: "Mini-jeu PFC",
      description: "Le jeu Pierre-Feuille-Ciseaux avec score dynamique.",
      longDescription:
        "Développement d'une logique de jeu contre l'ordinateur. Intégration d'animations CSS pour rendre l'interaction plus ludique.",
      tech: ["JavaScript", "CSS3"],
      image: imgMiniJeu,
      github: "https://github.com/Romeo3010/mini-jeu-pierre-feuille-ciseaux",
    },
    {
      id: 4,
      title: "ISFPS Actualité",
      description: "Plateforme d'information pour l'institut ISFPS.",
      longDescription:
        "Site dynamique gérant les actualités, les événements et les annonces de l'institut avec une base de données MySQL.",
      tech: ["PHP", "Bootstrap", "MySQL"],
      image: imgIsfpsactus,
      github: "https://github.com/Romeo3010/isfps_actualite",
    },
    {
      id: 5,
      title: "Portfolio Professionnel",
      description: "Mon site vitrine personnel (celui-ci même !).",
      longDescription:
        "Conception d'une interface moderne en Glassmorphism pour présenter mon parcours et mes projets de développement.",
      tech: ["React", "Bootstrap", "CSS3"],
      image: imgPortfolio,
      github: "https://github.com/Romeo3010/Portfolio",
    },
    {
      id: 6,
      title: "Site Vitrine ISFPS",
      description:
        "Plateforme officielle d'actualités et de présentation pour l'institut.",
      longDescription:
        "Développement du site vitrine de l'institut ISFPS. Le projet inclut une gestion dynamique des actualités, une présentation des formations et un espace d'information pour les étudiants, le tout avec une interface responsive.",
      tech: ["PHP", "Bootstrap", "MySQL", "JavaScript"],
      image: imgIsfps, // Assure-toi d'avoir fait l'import : import imgIsfps from "../assets/img/project/isfps.png";
      github: "https://github.com/Romeo3010/isfps_actualite",
    },
  ];

  return (
    <section className="container py-5 mt-5" id="projets">
      <div className="text-center mb-5">
        <h2 className="fw-bold text-white text-uppercase">
          Mes <span className="logo-glow">Projets</span>
        </h2>
        <div
          className="mx-auto"
          style={{
            height: "4px",
            width: "50px",
            background: "#a855f7",
            borderRadius: "2px",
          }}
        ></div>
      </div>

      <div className="row g-4">
        {projects.map((project) => (
          <div className="col-md-6 col-lg-4" key={project.id}>
            <div className="project-card h-100 bg-dark border border-secondary border-opacity-25 shadow-sm">
              {/* Image avec fallback si erreur */}
              <div
                className="project-img-wrapper"
                style={{
                  height: "200px",
                  background: "#222",
                  overflow: "hidden",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-100 h-100 object-fit-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x200?text=Image+en+cours";
                  }}
                />
              </div>

              {/* Contenu de la Carte */}
              <div className="p-4">
                <h5 className="text-white fw-bold mb-2">{project.title}</h5>
                <p className="text-secondary small mb-3">
                  {project.description}
                </p>

                <div className="d-flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, index) => (
                    <span
                      key={index}
                      className="badge bg-dark border border-secondary border-opacity-50 text-light small d-flex align-items-center gap-2 py-2 px-3"
                    >
                      {techIcons[t] && (
                        <i
                          className={techIcons[t].icon}
                          style={{ color: techIcons[t].color }}
                        ></i>
                      )}
                      {t}
                    </span>
                  ))}
                </div>

                <div className="d-flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-light btn-sm flex-fill py-2"
                  >
                    <i className="fa-brands fa-github me-2"></i>GitHub
                  </a>
                  <button
                    className="btn btn-primary btn-sm flex-fill py-2"
                    style={{ background: "#a855f7", border: "none" }}
                    onClick={() => setSelectedProject(project)}
                    data-bs-toggle="modal"
                    data-bs-target="#projectModal"
                  >
                    Détails
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- MODAL DE DÉTAILS --- */}
      <div
        className="modal fade"
        id="projectModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content bg-dark text-white border-secondary">
            {selectedProject && (
              <>
                <div className="modal-header border-secondary">
                  <h5 className="modal-title fw-bold">
                    {selectedProject.title}
                  </h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="modal"
                  ></button>
                </div>
                <div className="modal-body">
                  <img
                    src={selectedProject.image}
                    className="img-fluid rounded mb-4 w-100"
                    alt={selectedProject.title}
                  />
                  <h6 className="text-primary-glow fw-bold">
                    À propos du projet
                  </h6>
                  <p className="text-secondary">
                    {selectedProject.longDescription}
                  </p>

                  <h6 className="text-primary-glow fw-bold mt-4">
                    Technologies utilisées
                  </h6>
                  <div className="d-flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span
                        key={i}
                        className="badge bg-dark border border-secondary py-2 px-3 d-flex align-items-center gap-2"
                      >
                        {techIcons[t] && (
                          <i
                            className={techIcons[t].icon}
                            style={{ color: techIcons[t].color }}
                          ></i>
                        )}
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="modal-footer border-secondary">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Fermer
                  </button>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                    style={{ background: "#a855f7", border: "none" }}
                  >
                    <i className="fa-brands fa-github me-2"></i>Voir le code
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .project-card { border-radius: 15px; overflow: hidden; transition: transform 0.3s ease; }
        .project-card:hover { transform: translateY(-8px); }
        .text-primary-glow { color: #a855f7; }
        .logo-glow { color: #a855f7; text-shadow: 0 0 10px rgba(168, 85, 247, 0.5); }
        .object-fit-cover { object-fit: cover; }
        .modal-content { border-radius: 20px; }
      `}</style>
    </section>
  );
}
