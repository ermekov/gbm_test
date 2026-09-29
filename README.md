# GBM GROUP — Stage 2 skeleton (Next.js + TypeScript + Tailwind)

## Запуск
npm install
npm run dev
# http://localhost:3000

## Что реально работает
- Next.js 14 (App Router) + TypeScript + Tailwind, компоненты разнесены по файлам (components/*)
- Поиск в шапке — фильтрует mock-каталог (data/products.ts) на клиенте
- Форма заявки (CtaForm) реально отправляет POST на /api/lead,
  который пишет заявки в data/leads.json (замена на CRM ниже)
- Логотипы брендов — реальные файлы в public/brands, рендерятся через next/image

## Что ещё НЕ подключено (нужно для полного Stage 2)
- Реальная база данных (рекомендация: PostgreSQL + Prisma) вместо data/products.ts и leads.json
- Админ-панель для управления товарами/заявками
- Поиск/фильтры по каталогу как отдельные страницы (/catalog, /catalog/[category])
- Интеграция заявок с WhatsApp/Telegram (webhook из /api/lead)
- ИИ-подбор оборудования (сейчас на прототипе была только фронтенд-симуляция)
- Аутентификация (NextAuth) для админки
- Продакшн-деплой (Vercel / Docker) и переменные окружения

## Структура
app/            — страницы и API-роуты (App Router)
components/     — UI-компоненты (без бизнес-логики в разметке)
data/           — mock-данные каталога и файл лидов (замена на БД)
public/brands/  — логотипы брендов
