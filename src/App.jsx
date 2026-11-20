import Button from "./components/Button/Button.jsx";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle.jsx";
import LanguageToggle from "./components/LanguageToggle/LanguageToggle.jsx";
import { useLanguage } from "./context/LanguageContext.jsx";
export default function App() {
  const { t } = useLanguage();

  return (
    <div className="container" style={{ paddingTop: 40 }}>
      <div style={{ display: "flex", gap: 22, alignItems: "center" }}>
        <LanguageToggle />
        <ThemeToggle />
      </div>
      <h1>{t.hero.role}</h1>
      <div style={{ display: "flex", gap: 14, marginTop: 24 }}>
        <Button size="lg"> {t.hero.viewProjects}</Button>
        <Button size="lg" variant="outline">
          {t.hero.downloadCv}
        </Button>
        <Button size="lg" variant="inverse">
          {t.nav.contact}
        </Button>
      </div>
    </div>
  );
}
