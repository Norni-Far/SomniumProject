import { Dictionary } from "@/i18n/LangProvider";
import { Integrations } from "./Integrations";
import { Section } from "./ui/Section";

type AboutProps = {
  dict: Dictionary;
};

export function About({ dict }: AboutProps) {
  return (
    <Section id="about" title={dict.about.title} subtitle={dict.about.text}>
      <h3 className="text-2xl font-semibold">{dict.about.sdkTitle}</h3>
      <p className="mt-2 text-sm text-muted">{dict.about.sdkText}</p>
      <div className="mt-5">
        <Integrations />
      </div>
    </Section>
  );
}
