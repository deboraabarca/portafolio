import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";
import es from "../data/translations/es.js";
import en from "../data/translations/en.js";

// Aquí guardo el idioma de la web (es / en).
// Los componentes lo leen con useLanguage() y así no tengo
// que pasar el idioma de un componente a otro.
// Ejemplo: <h1>{t.hero.role}</h1>

const dictionaries = { es, en };
const STORAGE_KEY = "lang";

const LanguageContext = createContext(null);

function getInitialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "es" || saved === "en") return saved;
  } catch {}
  return navigator.language?.startsWith("en") ? "en" : "es";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
  }, [lang]);

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
