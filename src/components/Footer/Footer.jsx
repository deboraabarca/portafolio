import { useLocation } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { views } from "../../data/views.js";
import { profile } from "../../data/profile.js";
import { socialIcons } from "../Icons/Icons.jsx";
import "./Footer.css";

const pad = (n) => String(n).padStart(2, "0");

export default function Footer() {
  const { t } = useLanguage();
  const { pathname } = useLocation();
  const index = Math.max(
    0,
    views.findIndex((view) => view.path === pathname),
  );

  return (
    <footer className="footer container">
      <span className="footer__location">{t.footer.location}</span>

      <span className="footer__counter" arial-hidden="true">
        {pad(index + 1)}
        <i />
        {pad(views.length)}
      </span>

      <ul className="footer__social" aria-label={t.footer.social}>
        {profile.socials.map((social) => {
          const Icon = socialIcons[social.id];
          return (
            <li key={social.id}>
              <a
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
              >
                <Icon size={20} />
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}
