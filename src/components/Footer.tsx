import { Dictionary } from "@/i18n/LangProvider";
import { LangToggle } from "./ui/LangToggle";
import { ThemeToggle } from "./ui/ThemeToggle";
import { siteConfig } from "@/data/siteConfig";

type FooterProps = {
  dict: Dictionary;
};

export function Footer({ dict }: FooterProps) {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 text-sm sm:px-6 md:flex-row md:items-center md:justify-between">
        <p className="text-muted">{dict.footer.rights}</p>
        <div className="flex items-center gap-4">
          <a href={siteConfig.telegram} target="_blank" rel="noreferrer" className="hover:text-primary">
            Telegram
          </a>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-primary">
            Email
          </a>
          <LangToggle />
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
