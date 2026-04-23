import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div
        className="d-flex flex-column min-vh-100"
        style={{ background: "#050505" }}
      >
        {/* --- NAVBAR --- */}
        <nav
          className="navbar navbar-expand-lg navbar-dark sticky-top"
          style={{
            background: "rgba(5, 5, 5, 0.8)",
            backdropFilter: "blur(15px)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            padding: "15px 0",
          }}
        >
          <div className="container">
            <Link className="navbar-brand logo-glow fw-bold fs-3" to="/">
              PORTFOLIO<span style={{ color: "var(--primary-glow)" }}>.</span>
            </Link>

            <button
              className="navbar-toggler border-0 shadow-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <i className="fa-solid fa-bars-staggered text-white"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto gap-lg-4">
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link active-custom"
                        : "nav-link text-uppercase fw-bold"
                    }
                    to="/"
                  >
                    ACCUEIL
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link active-custom"
                        : "nav-link text-uppercase fw-bold"
                    }
                    to="/competences"
                  >
                    COMPÉTENCES
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link active-custom"
                        : "nav-link text-uppercase fw-bold"
                    }
                    to="/projects"
                  >
                    PROJETS
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link active-custom"
                        : "nav-link text-uppercase fw-bold"
                    }
                    to="/contact"
                  >
                    CONTACT
                  </NavLink>
                </li>
              </ul>

              {/* Bouton CV du Header (Fonctionne sur toutes les pages) */}
              <div className="d-none d-lg-block">
                <button
                  className="btn btn-cv-header px-4 py-2"
                  data-bs-toggle="modal"
                  data-bs-target="#cvModal"
                  style={{
                    background: "rgba(168, 85, 247, 0.1)",
                    border: "1px solid var(--primary-glow)",
                    color: "white",
                    borderRadius: "10px",
                  }}
                >
                  <i className="fa-solid fa-file-pdf me-2 text-danger"></i> CV
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* --- ROUTES (CONTENU DYNAMIQUE) --- */}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/competences" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* --- MODALE CV GLOBALE --- */}
        <div
          className="modal fade"
          id="cvModal"
          tabIndex="-1"
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
                <h5 className="modal-title text-white small fw-bold text-uppercase">
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

        {/* --- FOOTER --- */}
        <footer
          className="py-4 border-top border-secondary text-center mt-auto"
          style={{
            background: "#050505",
            borderColor: "rgba(255, 255, 255, 0.05) !important",
          }}
        >
          <div className="container">
            <p className="small text-secondary mb-0">
              &copy; {new Date().getFullYear()}{" "}
              <span className="text-white fw-bold">Sitraka Roméo</span>.
              <span className="ms-2 d-none d-md-inline">
                | Développeur Fullstack
              </span>
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
