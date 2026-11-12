import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import es from "../data/translations/es.js";
import en from "../data/translations/en.js";

// Aquí guardo el idioma de la web (es / en).
// Los componentes lo leen con useLanguage() y así no tengo
// que pasar el idioma de un componente a otro.
// Ejemplo: <h1>{t.hero.role}</h1>

const dictionaries = { es, en };
const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("es");

  const toggleLanguage = useCallback(() => {
    setLang((current) => (current === "es" ? "en" : "es"));
  }, []);

  const localize = useCallback(
    (value) => (typeof value === "string" ? value : (value?.[lang] ?? "")),
    [lang],
  );

  const value = useMemo(
    () => ({ lang, t: dictionaries[lang], toggleLanguage, localize }),
    [lang, toggleLanguage, localize],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx)
    throw new Error("useLanguage debe usarse dentro de <LanguageProvider>");
  return ctx;
}
