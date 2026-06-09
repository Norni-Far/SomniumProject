"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import en from "./en.json";
import ru from "./ru.json";

export type Locale = "ru" | "en";
export type Dictionary = typeof ru;

type LangContextValue = {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
};

const dictionaries: Record<Locale, Dictionary> = {
  ru,
  en,
};

const STORAGE_KEY = "somnium-locale";

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return "ru";
    }
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "ru" || stored === "en" ? stored : "ru";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      dictionary: dictionaries[locale],
      setLocale,
    }),
    [locale],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLang must be used inside LangProvider");
  }
  return context;
}
