"use client";

import { useState } from "react";
import { Locale } from "@/i18n/LangProvider";
import { CaseStudy } from "@/data/projects";

type CaseStudyAccordionProps = {
  title: string;
  caseStudy: CaseStudy;
  locale: Locale;
};

export function CaseStudyAccordion({ title, caseStudy, locale }: CaseStudyAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-5 rounded-xl border border-border bg-background p-4">
      <button
        type="button"
        className="flex w-full items-center justify-between text-left font-medium"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{title}</span>
        <span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      {open ? (
        <div className="mt-4 space-y-3 text-sm text-muted">
          <p>{caseStudy.task[locale]}</p>
          <ul className="list-disc space-y-1 pl-5">
            {caseStudy.implemented.map((point) => (
              <li key={point.en}>{point[locale]}</li>
            ))}
            {caseStudy.performance ? <li>{caseStudy.performance[locale]}</li> : null}
          </ul>
          {caseStudy.sdk?.length ? (
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted">
                {locale === "ru" ? "SDK и интеграции" : "SDK and integrations"}
              </p>
              <div className="flex flex-wrap gap-2">
                {caseStudy.sdk.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-surface px-2.5 py-1 text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
