# Nuxt Boilerplate

This is a robust Nuxt 3 boilerplate designed to kickstart your web development projects with a powerful stack. It integrates essential tools for UI, state management, database interaction, and code quality, providing a solid foundation for scalable and maintainable applications.

## ✨ Features

- **Nuxt 3**: The intuitive Vue.js framework for building modern web applications.
- **Nuxt UI**: Beautiful and accessible UI components powered by Headless UI and Tailwind CSS.
- **Nuxt Fonts**: Optimized font loading for better performance.
- **Nuxt Icon**: Easy integration of various icon sets.
- **Color Mode**: Dark/light mode switching with `@nuxtjs/color-mode`.
- **Pinia**: The official state management library for Vue.js, integrated with Nuxt.
- **Pinia Persisted State**: Persist your Pinia store data across page reloads.
- **VueUse**: A collection of essential Vue Composition API utilities.
- **Drizzle ORM**: A modern TypeScript ORM for relational databases, with drizzle-kit for migrations and schema management.
- **PostgreSQL (pg)**: Database driver for PostgreSQL.
- **Zod**: TypeScript-first schema validation library.
- **Winston**: A versatile logging library.
- **ESLint (@antfu/eslint-config)**: Code linting and formatting for consistent code style.
- **Husky & Lint-Staged**: Git hooks to ensure code quality before commits.
- **TSX**: TypeScript execution for Node.js scripts (e.g., database migrations, seeding).

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js (v18 or higher recommended) and npm/yarn/pnpm installed.

### Installation

Clone the repository:

```bash
git clone <your-repo-url>
cd nuxt-app # or whatever you name your project
```

Install dependencies:

```bash
npm install
```

Prepare Husky Git hooks:

```bash
npm run prepare # This runs automatically on postinstall
```

### Configuration

- **Database**: Configure your PostgreSQL connection string in your environment variables (e.g., `.env` file). Refer to Drizzle ORM documentation for specific setup.
- **Environment Variables**: Create a `.env` file in the root directory for sensitive information (e.g., database credentials).

## 📦 Scripts

| Script                   | Description                                           |
|--------------------------|-------------------------------------------------------|
| `npm run dev`            | Starts the development server with hot reload         |
| `npm run build`          | Builds the application for production                 |
| `npm run generate`       | Generates a static site for SSG                       |
| `npm run preview`        | Locally previews your production build                |
| `npm run postinstall`    | Runs after install to prepare Nuxt and Husky          |
| `npm run prepare`        | Sets up Husky Git hooks                               |
| `npm run studio`         | Opens the Drizzle Kit Studio                          |
| `npm run generate:migration` | Generates a DB migration from schema changes      |
| `npm run migrate`        | Applies pending database migrations                   |
| `npm run seed`           | Seeds the database with initial data                  |

## ⚙️ Dependencies

### Production Dependencies

| Package                            | Version     | Description                                                   |
|------------------------------------|-------------|---------------------------------------------------------------|
| `@nuxt/fonts`                      | ^0.11.4     | Handles font loading and optimization in Nuxt                 |
| `@nuxt/icon`                       | ^1.15.0     | Icons from various collections in Nuxt                        |
| `@nuxt/ui`                         | ^3.2.0      | UI components for Nuxt                                       |
| `@nuxtjs/color-mode`              | ^3.5.2      | Enables dark/light mode                                      |
| `@pinia/nuxt`                      | ^0.11.1     | Pinia integration for Nuxt                                   |
| `@vueuse/nuxt`                     | ^13.5.0     | VueUse utilities for Nuxt                                    |
| `drizzle-orm`                      | ^0.44.2     | Type-safe ORM                                                 |
| `nuxt`                             | ^3.17.6     | Vue.js framework                                              |
| `pg`                               | ^8.16.3     | PostgreSQL client                                             |
| `pinia`                            | ^3.0.3      | State management                                              |
| `pinia-plugin-persistedstate`     | ^4.4.1      | Persist Pinia state                                           |
| `vue`                              | ^3.5.17     | Vue core                                                      |
| `vue-router`                       | ^4.5.1      | Vue Router                                                    |
| `winston`                          | ^3.17.0     | Logging                                                       |
| `zod`                              | ^3.25.76    | Schema validation                                             |

### Development Dependencies

| Package              | Version     | Description                                                 |
|----------------------|-------------|-------------------------------------------------------------|
| `@antfu/eslint-config` | ^4.16.2   | ESLint config by Anthony Fu                                 |
| `@nuxt/devtools`     | ^2.6.2      | Developer tools for Nuxt                                   |
| `@types/pg`          | ^8.15.4     | Type definitions for pg                                     |
| `drizzle-kit`        | ^0.31.4     | DB migration tool for Drizzle ORM                           |
| `husky`              | ^9.1.7      | Git hooks                                                   |
| `lint-staged`        | ^16.1.2     | Run linters on staged files                                 |
| `tsx`                | ^4.20.3     | Execute TS files with Node.js                               |

## 📏 Linting and Formatting

This boilerplate uses ESLint with `@antfu/eslint-config` for code quality and consistency. `lint-staged` and `husky` are configured to automatically fix linting issues on staged files before committing.

```json
*.{js,ts,vue}: eslint --fix
```
