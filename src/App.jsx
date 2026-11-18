import LanguageToggle from "./components/LanguageToggle/LanguageTogle.jsx";
import { useLanguage } from "./context/LanguageContext.jsx";
export default function App() {
  const { t } = useLanguage();

  return (
    <div className="container" style={{ paddingTop: 40 }}>
      <LanguageToggle />
      <h1>{t.hero.rol}</h1>
    </div>
  );
}
