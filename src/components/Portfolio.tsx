import Image from "next/image";
import { projects } from "@/data/projects";
import { Dictionary, Locale } from "@/i18n/LangProvider";
import { Card } from "./ui/Card";
import { CaseStudyAccordion } from "./ui/CaseStudyAccordion";
import { Section } from "./ui/Section";
import { StoreButtons } from "./ui/StoreButtons";

type PortfolioProps = {
  dict: Dictionary;
  locale: Locale;
};

export function Portfolio({ dict, locale }: PortfolioProps) {
  return (
    <Section id="portfolio" title={dict.portfolio.title}>
      <div className="space-y-5">
        <Card>
          <h3 className="text-xl font-semibold">{dict.portfolio.videoTitle}</h3>
          <p className="mt-2 text-sm text-muted">{dict.portfolio.videoText}</p>
          <div className="mt-4 overflow-hidden rounded-xl border border-border">
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/67yIC8vQZfk?list=PLjwWjcNak-vADGGtZnLkeD9Goow8hOl4s&modestbranding=1&rel=0"
              title="Somnium Project showreel"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </Card>

        <div className="grid gap-4 lg:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.id}>
              <p className="text-xs uppercase tracking-wide text-muted">{project.platforms}</p>
              <h3 className="mt-1 text-xl font-semibold">{project.name}</h3>
              <p className="mt-2 text-sm text-muted">{project.short[locale]}</p>
              <StoreButtons googlePlay={project.links.googlePlay} appStore={project.links.appStore} />
              <CaseStudyAccordion
                title={dict.portfolio.caseTitle}
                caseStudy={project.caseStudy}
                locale={locale}
              />
            </Card>
          ))}
        </div>

        <a
          href="https://www.youtube.com/playlist?list=PLjwWjcNak-vADGGtZnLkeD9Goow8hOl4s"
          target="_blank"
          rel="noreferrer"
          className="group block overflow-hidden rounded-2xl border border-border bg-surface"
        >
          <div className="relative">
            <Image
              src="https://img.youtube.com/vi/67yIC8vQZfk/maxresdefault.jpg"
              alt={dict.portfolio.playlistTitle}
              className="h-52 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
              width={1280}
              height={720}
              loading="lazy"
            />
            <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
              {dict.portfolio.videosBadge}
            </span>
          </div>
          <div className="p-5">
            <h3 className="text-xl font-semibold">{dict.portfolio.playlistTitle}</h3>
            <p className="mt-2 text-sm text-muted">{dict.portfolio.playlistText}</p>
            <p className="mt-3 text-sm text-primary">{dict.portfolio.playlistHint}</p>
          </div>
        </a>
      </div>
    </Section>
  );
}
