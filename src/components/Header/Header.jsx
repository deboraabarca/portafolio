import { useLocation } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext.jsx";
import Button from "../Button/Button.jsx";
import LanguageToggle from "../LanguageToggle/LanguageToggle.jsx";
import Logo from "../Logo/Logo.jsx";
import NavPill from "../NavPill/NavPill.jsx";
import ThemeToggle from "../ThemeToggle/ThemeToggle.jsx";
import "./Header.css";

export default function Header() {
  const { t } = useLanguage();
  const { pathname } = useLocation();
  const isContact = pathname === "/contacto";

  return (
    <header className="header container">
      <div className="header__left">
        <Logo />
      </div>

      <NavPill />

      <div className="header__right">
        <LanguageToggle />
        <ThemeToggle />
        <Button to="/contacto" variant={isContact ? "inverse" : "primary"}>
          {t.nav.contact}
        </Button>
      </div>
    </header>
  );
}
