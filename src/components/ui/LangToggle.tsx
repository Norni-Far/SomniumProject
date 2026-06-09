"use client";

import { useLang } from "@/i18n/LangProvider";
import { ActionButton } from "./Button";

export function LangToggle() {
  const { locale, setLocale } = useLang();
  return (
    <ActionButton
      variant="secondary"
      onClick={() => setLocale(locale === "ru" ? "en" : "ru")}
      aria-label="Toggle language"
    >
      {locale === "ru" ? "EN" : "RU"}
    </ActionButton>
  );
}
