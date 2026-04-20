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
        {/* HEADER AMÉLIORÉ */}
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
                    to="/projets"
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

              {/* Bouton CV rapide dans le header comme sur ton PHP */}
              <div className="d-none d-lg-block">
                <button
                  className="btn btn-cv-header px-4 py-2"
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

        {/* CONTENU QUI S'ADAPTE */}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projets" element={<Projects />} />
            <Route path="/competences" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* FOOTER STICKY */}
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
