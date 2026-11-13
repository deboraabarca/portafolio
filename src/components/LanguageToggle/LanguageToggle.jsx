import { useLanguage } from "../../context/LanguageContext.jsx";

export default function LanguageToggle() {
  const { lang, t, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={toggleLanguage}
      aria-label={t.a11y.changeLanguage}
    >
      <span className={lang === "es" ? "is-active" : ""}>ES</span>
      <span aria-hidden="true"> / </span>
      <span className={lang === "en" ? "is-active" : ""}>EN</span>
    </button>
  );
}
