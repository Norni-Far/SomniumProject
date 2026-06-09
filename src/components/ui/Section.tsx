import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
};

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      {(title || subtitle) && (
        <header className="mb-8 sm:mb-10">
          {title ? <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2> : null}
          {subtitle ? <p className="mt-3 max-w-3xl text-muted">{subtitle}</p> : null}
        </header>
      )}
      {children}
    </section>
  );
}
