import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import "./Logo.css";

export default function Logo() {
  const { t } = useLanguage();

  return (
    <Link to="/" className="logo" aria-label={t.a11y.goHome}>
      <svg viewBox="0 0 70 70" width="44" height="44" aria-hidden="true">
        <path className="logo__letter" d="M8 6 H34 A29 29 0 0 1 34 64 H8 Z" />
        <circle className="logo__dot" cx="36" cy="35" r="8" />
      </svg>
    </Link>
  );
}
