export type ServiceItem = {
  id: string;
  featured?: boolean;
  cta?: boolean;
};

export const services: ServiceItem[] = [
  { id: "businessApps" },
  { id: "games" },
  { id: "prototype7Days", featured: true, cta: true },
  { id: "simulators" },
  { id: "eduApps" },
  { id: "mvp" },
  { id: "consulting" },
];
