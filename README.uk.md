# Handshake Residential Architects

Handshake — преміальний односторінковий сайт для студії житлової архітектури в Сіетлі, США. Реалізація натхненна стриманою редакційною естетикою архітектурного шаблону, але має власну структуру, тексти, зображення, стилі та інтерактивну логіку.

## Стек

- Semantic HTML
- SCSS/CSS
- Vanilla JavaScript
- Webpack 5
- pnpm 11.7.0

## Запуск

```powershell
pnpm install
pnpm start
```

Production build:

```powershell
pnpm run build
```

Згенеровані файли потрапляють у `public/`.

## Джерело правди

- `src/index.html` — шаблон сторінки для Webpack
- `src/style/styles.scss` — основні стилі
- `src/index.js` — інтерактивна логіка

## Нотатки

- Перед production потрібно замінити placeholder-контакти.
- Перед запуском потрібно замінити Unsplash-зображення на ліцензовані або власні матеріали студії.
- Newsletter наразі має лише front-end підтвердження без реального сервісу підписки.
- `pnpm-workspace.yaml` фіксує, що optional build script для `@parcel/watcher` не схвалений у цьому проєкті.
