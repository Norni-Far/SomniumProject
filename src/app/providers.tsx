"use client";

import { LangProvider } from "@/i18n/LangProvider";
import { ThemeProvider } from "@/lib/ThemeProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LangProvider>{children}</LangProvider>
    </ThemeProvider>
  );
}
