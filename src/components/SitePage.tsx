"use client";

import { useLang } from "@/i18n/LangProvider";
import { About } from "./About";
import { Contacts } from "./Contacts";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Portfolio } from "./Portfolio";
import { Process } from "./Process";
import { Services } from "./Services";

export function SitePage() {
  const { dictionary, locale } = useLang();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header dict={dictionary} />
      <main>
        <Hero dict={dictionary} />
        <Services dict={dictionary} locale={locale} />
        <Portfolio dict={dictionary} locale={locale} />
        <Process dict={dictionary} locale={locale} />
        <About dict={dictionary} />
        <Contacts dict={dictionary} />
      </main>
      <Footer dict={dictionary} />
    </div>
  );
}
