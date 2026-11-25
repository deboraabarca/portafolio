import { NavLink } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { views } from "../../data/views.js";

//NavLink marca solo la vista activa.
export default function NavPill() {
  const { t } = useLanguage();
  return (
    <nav className="nav-pill" arial-label={t.a11y.mainNav}>
      <ul className="nav-pill__list">
        {views
          .filter((view) => view.inNav)
          .map((view) => (
            <li key={view.id}>
              <NavLink
                to={view.path}
                end={view.path === "/"}
                className={({ isActive }) =>
                  `nav-pill__link${isActive ? " is-active" : ""}`
                }
              >
                {t.nav[view.id]}
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
}
