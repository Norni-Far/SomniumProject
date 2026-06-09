import { Dictionary } from "@/i18n/LangProvider";
import { LinkButton } from "./ui/Button";
import { Section } from "./ui/Section";

type HeroProps = {
  dict: Dictionary;
};

export function Hero({ dict }: HeroProps) {
  return (
    <Section>
      <div id="top" className="rounded-3xl border border-border bg-surface p-8 sm:p-12">
        <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          {dict.hero.badge}
        </span>
        <h1 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {dict.hero.title}
        </h1>
        <p className="mt-4 max-w-2xl text-muted">{dict.hero.subtitle}</p>
        <p className="mt-3 max-w-2xl text-sm text-muted">{dict.hero.micro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <LinkButton href="#contacts">{dict.hero.primaryCta}</LinkButton>
          <LinkButton href="#portfolio" variant="secondary">
            {dict.hero.secondaryCta}
          </LinkButton>
        </div>
      </div>
    </Section>
  );
}
