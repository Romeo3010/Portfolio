import React from "react";

export default function Competences() {
  const skills = {
    frontend: [
      {
        name: "HTML5",
        level: 95,
        icon: "fa-brands fa-html5",
        color: "#E34F26",
      },
      {
        name: "Bootstrap",
        level: 90,
        icon: "fa-brands fa-bootstrap",
        color: "#563d7c",
      },
      {
        name: "CSS3",
        level: 90,
        icon: "fa-brands fa-css3-alt",
        color: "#1572B6",
      },
      {
        name: "JavaScript",
        level: 85,
        icon: "fa-brands fa-js",
        color: "#F7DF1E",
      },
      {
        name: "React.js",
        level: 80,
        icon: "fa-brands fa-react",
        color: "#61DAFB",
      },
    ],
    backend: [
      { name: "PHP", level: 75, icon: "fa-brands fa-php", color: "#777BB4" },
      {
        name: "Symfony",
        level: 70,
        icon: "fa-solid fa-cubes",
        color: "#373a0c",
      },
      {
        name: "MySQL",
        level: 80,
        icon: "fa-solid fa-database",
        color: "#4479A1",
      },
      {
        name: "Laravel",
        level: 60,
        icon: "fa-brands fa-laravel",
        color: "#3776AB",
      },
      {
        name: "Node.js",
        level: 65,
        icon: "fa-brands fa-node-js",
        color: "#339933",
      },
    ],
    outils: [
      {
        name: "Git & GitHub",
        level: 85,
        icon: "fa-brands fa-github",
        color: "#ffffff",
      },
      {
        name: "Responsive Design",
        level: 95,
        icon: "fa-solid fa-mobile-screen-button",
        color: "#A855F7",
      },
      {
        name: "Figma",
        level: 70,
        icon: "fa-brands fa-figma",
        color: "#F24E1E",
      },
      {
        name: "VS Code",
        level: 90,
        icon: "fa-solid fa-code",
        color: "#007ACC",
      },
    ],
  };

  return (
    <section className="container py-5 mt-5" id="competences">
      {/* Titre de la section */}
      <div className="text-center mb-5">
        <h2 className="fw-bold text-white text-uppercase">
          Mes <span className="logo-glow">Compétences</span>
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

      <div className="row g-4">
        {/* FRONT-END */}
        <div className="col-md-6 col-lg-4">
          <div
            className="glass-card p-4 h-100 shadow-sm"
            style={{
              border: "1px solid rgba(255,255,255,0.05)",
              background: "rgba(255,255,255,0.02)",
              borderRadius: "20px",
            }}
          >
            <h5 className="text-white mb-4 d-flex align-items-center">
              <span
                className="p-2 rounded-3 me-3"
                style={{ background: "rgba(13, 202, 240, 0.1)" }}
              >
                <i className="fa-solid fa-layer-group text-info"></i>
              </span>
              Développement Front-End
            </h5>
            {skills.frontend.map((skill, index) => (
              <SkillItem key={index} {...skill} />
            ))}
          </div>
        </div>

        {/* BACK-END */}
        <div className="col-md-6 col-lg-4">
          <div
            className="glass-card p-4 h-100 shadow-sm"
            style={{
              border: "1px solid rgba(255,255,255,0.05)",
              background: "rgba(255,255,255,0.02)",
              borderRadius: "20px",
            }}
          >
            <h5 className="text-white mb-4 d-flex align-items-center">
              <span
                className="p-2 rounded-3 me-3"
                style={{ background: "rgba(255, 193, 7, 0.1)" }}
              >
                <i className="fa-solid fa-server text-warning"></i>
              </span>
              Développement Back-End
            </h5>
            {skills.backend.map((skill, index) => (
              <SkillItem key={index} {...skill} />
            ))}
          </div>
        </div>

        {/* OUTILS & MÉTHODES */}
        <div className="col-md-12 col-lg-4">
          <div
            className="glass-card p-4 h-100 shadow-sm"
            style={{
              border: "1px solid rgba(255,255,255,0.05)",
              background: "rgba(255,255,255,0.02)",
              borderRadius: "20px",
            }}
          >
            <h5 className="text-white mb-4 d-flex align-items-center">
              <span
                className="p-2 rounded-3 me-3"
                style={{ background: "rgba(168, 85, 247, 0.1)" }}
              >
                <i
                  className="fa-solid fa-screwdriver-wrench"
                  style={{ color: "var(--primary-glow)" }}
                ></i>
              </span>
              Outils & Méthodes
            </h5>
            {skills.outils.map((skill, index) => (
              <SkillItem key={index} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Composant pour chaque ligne de compétence
function SkillItem({ name, level, icon, color }) {
  return (
    <div className="mb-4">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div className="d-flex align-items-center">
          <i
            className={`${icon} me-2`}
            style={{
              color: color,
              fontSize: "1.1rem",
              width: "25px",
              textAlign: "center",
            }}
          ></i>
          <span className="text-light-emphasis small fw-medium">{name}</span>
        </div>
        <span className="small text-secondary">{level}%</span>
      </div>
      <div
        className="progress"
        style={{
          height: "6px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "10px",
          overflow: "visible",
        }}
      >
        <div
          className="progress-bar"
          role="progressbar"
          style={{
            width: `${level}%`,
            backgroundColor: color,
            borderRadius: "10px",
            boxShadow: `0 0 10px ${color}44`, // Légère lueur de la couleur de l'icône
            transition: "width 1.5s ease-in-out",
          }}
          aria-valuenow={level}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
}
