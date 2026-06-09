# Somnium Project Website (v1)

Одностраничный сайт студии `Somnium Project` по GDD из `Data/ReadME.text`.

## Стек

- Next.js (App Router, static export)
- TypeScript
- Tailwind CSS v4
- Formspree (контактная форма)

## Запуск локально

```bash
npm install
cp .env.example .env.local
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Переменные окружения

В `.env.local`:

```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

## Сборка статики

```bash
npm run build
```

Результат в папке `out/`.

## Структура проекта

- `src/app` — layout, page, глобальные стили, providers
- `src/components` — секции сайта и UI-компоненты
- `src/data` — все структурные данные (услуги, проекты, процесс, интеграции, конфиг)
- `src/i18n` — словари `ru.json` / `en.json` и провайдер языка
- `public` — статические ресурсы, `robots.txt`, `sitemap.xml`

## Где менять контент

- Услуги: `src/data/services.ts` + локализованные тексты в `src/components/Services.tsx`
- Портфолио и кейсы: `src/data/projects.ts`
- Процесс: `src/data/process.ts`
- SDK & Integrations: `src/data/integrations.ts`
- Контакты и домен: `src/data/siteConfig.ts`
- Локализация UI: `src/i18n/ru.json`, `src/i18n/en.json`

## YouTube плейлист

- Главный embed и карточка плейлиста находятся в `src/components/Portfolio.tsx`.
- Чтобы поменять видео/плейлист, обновите URL в этом компоненте.

## Деплой

Хостинг еще не выбран, проект готов к деплою на Vercel/Netlify/GitHub Pages как статический сайт из `out/`.
