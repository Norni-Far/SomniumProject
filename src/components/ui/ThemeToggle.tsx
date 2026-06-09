"use client";

import { useTheme } from "@/lib/ThemeProvider";
import { ActionButton } from "./Button";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <ActionButton variant="secondary" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === "light" ? "Dark" : "Light"}
    </ActionButton>
  );
}
