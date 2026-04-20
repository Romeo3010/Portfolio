export default function Projects() {
  const myProjects = [
    {
      title: "Gestion de Stock",
      tech: "PHP / MySQL",
      desc: "Optimisation des flux d'inventaire.",
    },
    {
      title: "E-commerce",
      tech: "Laravel / Stripe",
      desc: "Boutique complète avec tunnel d'achat.",
    },
    {
      title: "Portfolio V2.0",
      tech: "React / Node",
      desc: "Design moderne Glassmorphism.",
    },
  ];

  return (
    <section className="container py-5">
      <h2 className="text-white fw-bold text-center mb-5">Mes Projets</h2>
      <div className="row g-4">
        {myProjects.map((p, i) => (
          <div className="col-md-4" key={i}>
            <div className="project-card p-4">
              <h5 className="text-white fw-bold">{p.title}</h5>
              <span className="tech-badge mb-3 d-inline-block">{p.tech}</span>
              <p className="text-secondary small">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
