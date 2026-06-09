import { services } from "@/data/services";
import { Dictionary, Locale } from "@/i18n/LangProvider";
import { Card } from "./ui/Card";
import { LinkButton } from "./ui/Button";
import { Section } from "./ui/Section";

type ServicesProps = {
  dict: Dictionary;
  locale: Locale;
};

const serviceText = {
  businessApps: {
    ru: { title: "Бизнес-приложения", text: "Внутренние инструменты, интерактивные панели, event-apps." },
    en: { title: "Business apps", text: "Internal tools, interactive dashboards, and event apps." },
  },
  games: {
    ru: { title: "Игры", text: "Мобильные и PC-игры: геймплей, UI, мультиплеер, релиз." },
    en: { title: "Games", text: "Mobile and PC games: gameplay, UI, multiplayer, and release." },
  },
  prototype7Days: {
    ru: { title: "Прототип до 7 дней", text: "Быстрый прототип для проверки идеи, питча или инвестора." },
    en: { title: "Prototype in up to 7 days", text: "Fast prototype to validate an idea, pitch, or investor demo." },
  },
  simulators: {
    ru: { title: "Приложения-симуляторы", text: "Тренажёры, бизнес-симуляции, интерактивные сценарии." },
    en: { title: "Simulation apps", text: "Training tools, business simulations, and interactive scenarios." },
  },
  eduApps: {
    ru: { title: "Обучающие приложения", text: "EdTech, детские приложения, интерактивное обучение." },
    en: { title: "Educational apps", text: "EdTech, children apps, and interactive learning." },
  },
  mvp: {
    ru: { title: "Прототип / MVP", text: "Рабочая версия продукта без лишней сложности." },
    en: { title: "Prototype / MVP", text: "Working product version without unnecessary complexity." },
  },
  consulting: {
    ru: { title: "Консультации", text: "Аудит проекта, архитектура, оценка сроков и рисков." },
    en: { title: "Consulting", text: "Project audit, architecture review, and risk/scope estimation." },
  },
} as const;

export function Services({ dict, locale }: ServicesProps) {
  return (
    <Section id="services" title={dict.services.title} subtitle={dict.services.lead}>
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service) => {
          const data = serviceText[service.id as keyof typeof serviceText][locale];
          return (
            <Card
              key={service.id}
              className={
                service.featured
                  ? "border-primary bg-gradient-to-br from-primary/10 via-surface to-secondary/10"
                  : ""
              }
            >
              <h3 className="text-xl font-semibold">{data.title}</h3>
              <p className="mt-2 text-sm text-muted">{data.text}</p>
              {service.cta ? (
                <div className="mt-4 space-y-3">
                  <p className="text-sm text-muted">{dict.services.quickText}</p>
                  <LinkButton href="#contacts">{dict.services.quickTitle}</LinkButton>
                </div>
              ) : null}
            </Card>
          );
        })}
      </div>
      <p className="mt-5 text-sm text-muted">{dict.services.micro}</p>
    </Section>
  );
}
