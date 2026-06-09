"use client";

import { useState } from "react";
import { Dictionary } from "@/i18n/LangProvider";
import { LangToggle } from "./ui/LangToggle";
import { ThemeToggle } from "./ui/ThemeToggle";
import { LinkButton } from "./ui/Button";

type HeaderProps = {
  dict: Dictionary;
};

export function Header({ dict }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="text-lg font-semibold tracking-tight">
          Somnium Project
        </a>
        <nav className="hidden items-center gap-5 text-sm text-muted md:flex">
          <a href="#services" className="hover:text-foreground">
            {dict.nav.services}
          </a>
          <a href="#portfolio" className="hover:text-foreground">
            {dict.nav.portfolio}
          </a>
          <a href="#process" className="hover:text-foreground">
            {dict.nav.process}
          </a>
          <a href="#contacts" className="hover:text-foreground">
            {dict.nav.contacts}
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
          <button
            type="button"
            className="rounded-full border border-border px-3 py-2 text-xs md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            Menu
          </button>
          <LinkButton href="#contacts" className="hidden sm:inline-flex">
            {dict.nav.cta}
          </LinkButton>
        </div>
      </div>
      {menuOpen ? (
        <nav className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 pb-4 text-sm md:hidden">
          <a href="#services" onClick={() => setMenuOpen(false)}>
            {dict.nav.services}
          </a>
          <a href="#portfolio" onClick={() => setMenuOpen(false)}>
            {dict.nav.portfolio}
          </a>
          <a href="#process" onClick={() => setMenuOpen(false)}>
            {dict.nav.process}
          </a>
          <a href="#contacts" onClick={() => setMenuOpen(false)}>
            {dict.nav.contacts}
          </a>
        </nav>
      ) : null}
    </header>
  );
}
