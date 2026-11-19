import { useLanguage } from "../../context/LanguageContext.jsx";
import { useTheme } from "../../context/ThemeContext.jsx";
import { MoonIcon, SunIcon } from "../Icons/Icons.jsx";

// Muestra el icono del tema ACTUAL
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const Icon = theme === "dark" ? MoonIcon : SunIcon;

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? t.a11y.toLight : t.a11y.toDark}
    >
      <Icon size={22} />
    </button>
  );
}
