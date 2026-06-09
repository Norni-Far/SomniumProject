export type CaseStudy = {
  task: { ru: string; en: string };
  implemented: { ru: string; en: string }[];
  performance?: { ru: string; en: string };
  sdk?: string[];
};

export type ProjectItem = {
  id: string;
  name: string;
  platforms: string;
  links: {
    googlePlay?: string;
    appStore?: string;
  };
  short: {
    ru: string;
    en: string;
  };
  caseStudy: CaseStudy;
};

export const projects: ProjectItem[] = [
  {
    id: "fight-of-castles",
    name: "Fight of Castles",
    platforms: "Android",
    links: {
      googlePlay:
        "https://play.google.com/store/apps/details?id=com.HakiGames.FightofCastles",
    },
    short: {
      ru: "Стратегический автобаттлер: постройка зданий, юниты, PvP против крепости.",
      en: "Strategy autobattler: build structures, spawn units, destroy enemy castle.",
    },
    caseStudy: {
      task: {
        ru: "Сделать динамичный автобаттлер для мобильной аудитории с понятным PvP-циклом.",
        en: "Build a dynamic mobile autobattler with a clear PvP loop.",
      },
      implemented: [
        {
          ru: "Реализованы core-механики: постройка, спавн юнитов, бой против вражеской крепости.",
          en: "Implemented core gameplay: building, unit spawning, and enemy castle combat.",
        },
        {
          ru: "Настроены UI-флоу и баланс раннего прогресса.",
          en: "Set up UI flows and early progression balancing.",
        },
      ],
      performance: {
        ru: "Проведена оптимизация мобильного рендеринга и загрузок сцены.",
        en: "Optimized mobile rendering and scene loading flow.",
      },
      sdk: ["Unity", "C#", "Firebase", "Crashlytics", "DOTween", "Addressables"],
    },
  },
  {
    id: "event-controller",
    name: "Event Controller (Stugi / Stugi Birthday)",
    platforms: "Android + iOS",
    links: {
      googlePlay:
        "https://play.google.com/store/apps/details?id=com.SomniumProject.Stugi&pli=1",
      appStore: "https://apps.apple.com/sa/app/stugi/id6642673141",
    },
    short: {
      ru: "Live-управление мероприятиями: QR-подключение и контроль медиа на host PC.",
      en: "Live event control: QR join and real-time media playback on host PC.",
    },
    caseStudy: {
      task: {
        ru: "Сделать удобный remote-controller для live-мероприятий с быстрым подключением гостей.",
        en: "Build a practical remote controller for live events with fast attendee onboarding.",
      },
      implemented: [
        {
          ru: "Реализовано QR-подключение к сессии мероприятия.",
          en: "Implemented QR-based session join.",
        },
        {
          ru: "Добавлено управление медиа на host PC в реальном времени.",
          en: "Added real-time media control on host PC.",
        },
        {
          ru: "Настроена синхронизация файлов и работа через REST API.",
          en: "Configured file synchronization and REST API integration.",
        },
      ],
      sdk: [
        "Unity",
        "C#",
        "REST API",
        "Firebase",
        "Google Sign-In",
        "Apple ID",
      ],
    },
  },
];
