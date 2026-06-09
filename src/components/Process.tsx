import { processSteps } from "@/data/process";
import { Dictionary, Locale } from "@/i18n/LangProvider";
import { Card } from "./ui/Card";
import { Section } from "./ui/Section";

type ProcessProps = {
  dict: Dictionary;
  locale: Locale;
};

export function Process({ dict, locale }: ProcessProps) {
  return (
    <Section id="process" title={dict.process.title}>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step) => (
          <Card key={step.id}>
            <p className="text-xs uppercase tracking-wider text-primary">Step {step.id}</p>
            <p className="mt-2 text-sm">{locale === "ru" ? step.ru : step.en}</p>
          </Card>
        ))}
      </div>
      <p className="mt-5 text-sm text-muted">{dict.process.note}</p>
    </Section>
  );
}
