# Core Engineering Standards (TypeScript)

**Priority: CRITICAL**
**Activation: ALWAYS_ON**

## 1. Code Generation Output

- **No Conversation**: Output code blocks immediately. Do not use phrases like "Here is the code", "Sure", or "I have updated the file".
- **No Emojis**: Never use emojis in file content, commit messages, or chat responses.
- **No Markdown Fluff**: Do not use bold/italic text for emphasis in chat. Keep responses plain.

## 2. File Structure & Modularity

- **Hard Limit**: Maximum 200 lines per file.
- **Enforcement**: If a file exceeds 200 lines, refactor into sub-modules or hooks immediately.
- **Naming Conventions**:
  - **Files**: `kebab-case.ts` (utilities, services) or `PascalCase.tsx` (components).
  - **Directories**: `kebab-case`.
- **Barrel Files**: Use `index.ts` only for exporting public API of a module.
- **Exports**: Prefer **Named Exports** over Default Exports to ensure accurate refactoring and tree-shaking.

## 3. TypeScript Standards

- **Strict Mode**: Assume `strict: true`.
- **No `any`**: Explicitly forbidden. Use `unknown` with type guards or Generics if the type is dynamic.
- **Interfaces vs Types**: Use `interface` for extendable object definitions. Use `type` for unions, intersections, and primitives.
- **Immutability**: Prefer `readonly` arrays and properties where data should not be mutated.
- **Async**: Use `async/await` exclusively. Do not use `.then()`.

## 4. Implementation Quality

- **Functional**: Prefer functional programming patterns over class-based OOP, unless using a framework that specifically requires classes (e.g., NestJS).
- **Early Returns**: Use guard clauses to reduce nesting depth.

## 4.5 Determinism & No Assumptions

- **No Assumptions**: Never invent values or silently “pick something reasonable”.
- **No Hardcoded Fallback Defaults**: Do not use `??` or `||` to inject hardcoded defaults (e.g. `x ?? 0`, `name || "Unknown"`).
- **Explicit Source Required**: Fallbacks are allowed only when the fallback comes from an explicit, documented source (validated config, function parameter default, schema default, or a constant that is part of the product spec).
- **Fail Fast Over Guessing**: If a required value is missing/invalid and there is no explicitly-defined fallback, throw/return an error early rather than continuing with a guessed value.
- **Truthiness Defaults Forbidden**: Never use `||` to coerce “empty string/0/false” into another value. Use explicit checks when the business rule truly requires it.
- **Null Handling**: Use Optional Chaining (`?.`) for safe access. Use Nullish Coalescing (`??`) only when the fallback is explicitly defined by spec/config/schema, never as an implicit hardcoded default. Avoid `||` for defaults entirely.

## 5. Documentation

- **JSDoc**: Required for all exported functions and interfaces.
- **Why, Not What**: Comments must explain the intent and business logic, not the syntax.
- **No Redundant Comments**: Delete comments like `// defines interface` or `// imports react`.

## 6. Testing

- **Co-location**: Test files must sit next to the source file (e.g., `component.tsx` -> `component.test.tsx`).
- **Coverage**: Tests must cover edge cases, not just the happy path.


# shadcn/ui

> shadcn/ui is a collection of beautifully-designed, accessible components and a code distribution platform. It is built with TypeScript, Tailwind CSS, and Radix UI primitives. It supports multiple frameworks including Next.js, Vite, Remix, Astro, and more. Open Source. Open Code. AI-Ready. It also comes with a command-line tool to install and manage components and a registry system to publish and distribute code.

## Overview

- [Introduction](https://ui.shadcn.com/docs): Core principles—Open Code, Composition, Distribution, Beautiful Defaults, and AI-Ready design.
- [CLI](https://ui.shadcn.com/docs/cli): Command-line tool for installing and managing components.
- [components.json](https://ui.shadcn.com/docs/components-json): Configuration file for customizing the CLI and component installation.
- [Theming](https://ui.shadcn.com/docs/theming): Guide to customizing colors, typography, and design tokens.
- [Changelog](https://ui.shadcn.com/docs/changelog): Release notes and version history.
- [About](https://ui.shadcn.com/docs/about): Credits and project information.

## Installation

- [Next.js](https://ui.shadcn.com/docs/installation/next): Install shadcn/ui in a Next.js project.
- [Vite](https://ui.shadcn.com/docs/installation/vite): Install shadcn/ui in a Vite project.
- [Remix](https://ui.shadcn.com/docs/installation/remix): Install shadcn/ui in a Remix project.
- [Astro](https://ui.shadcn.com/docs/installation/astro): Install shadcn/ui in an Astro project.
- [Laravel](https://ui.shadcn.com/docs/installation/laravel): Install shadcn/ui in a Laravel project.
- [Gatsby](https://ui.shadcn.com/docs/installation/gatsby): Install shadcn/ui in a Gatsby project.
- [React Router](https://ui.shadcn.com/docs/installation/react-router): Install shadcn/ui in a React Router project.
- [TanStack Router](https://ui.shadcn.com/docs/installation/tanstack-router): Install shadcn/ui in a TanStack Router project.
- [TanStack Start](https://ui.shadcn.com/docs/installation/tanstack): Install shadcn/ui in a TanStack Start project.
- [Manual Installation](https://ui.shadcn.com/docs/installation/manual): Manually install shadcn/ui without the CLI.

## Components

### Form & Input

- [Form](https://ui.shadcn.com/docs/components/form): Building forms with React Hook Form and Zod validation.
- [Field](https://ui.shadcn.com/docs/components/field): Field component for form inputs with labels and error messages.
- [Button](https://ui.shadcn.com/docs/components/button): Button component with multiple variants.
- [Button Group](https://ui.shadcn.com/docs/components/button-group): Group multiple buttons together.
- [Input](https://ui.shadcn.com/docs/components/input): Text input component.
- [Input Group](https://ui.shadcn.com/docs/components/input-group): Input component with prefix and suffix addons.
- [Input OTP](https://ui.shadcn.com/docs/components/input-otp): One-time password input component.
- [Textarea](https://ui.shadcn.com/docs/components/textarea): Multi-line text input component.
- [Checkbox](https://ui.shadcn.com/docs/components/checkbox): Checkbox input component.
- [Radio Group](https://ui.shadcn.com/docs/components/radio-group): Radio button group component.
- [Select](https://ui.shadcn.com/docs/components/select): Select dropdown component.
- [Switch](https://ui.shadcn.com/docs/components/switch): Toggle switch component.
- [Slider](https://ui.shadcn.com/docs/components/slider): Slider input component.
- [Calendar](https://ui.shadcn.com/docs/components/calendar): Calendar component for date selection.
- [Date Picker](https://ui.shadcn.com/docs/components/date-picker): Date picker component combining input and calendar.
- [Combobox](https://ui.shadcn.com/docs/components/combobox): Searchable select component with autocomplete.
- [Label](https://ui.shadcn.com/docs/components/label): Form label component.

### Layout & Navigation

- [Accordion](https://ui.shadcn.com/docs/components/accordion): Collapsible accordion component.
- [Breadcrumb](https://ui.shadcn.com/docs/components/breadcrumb): Breadcrumb navigation component.
- [Navigation Menu](https://ui.shadcn.com/docs/components/navigation-menu): Accessible navigation menu with dropdowns.
- [Sidebar](https://ui.shadcn.com/docs/components/sidebar): Collapsible sidebar component for app layouts.
- [Tabs](https://ui.shadcn.com/docs/components/tabs): Tabbed interface component.
- [Separator](https://ui.shadcn.com/docs/components/separator): Visual divider between content sections.
- [Scroll Area](https://ui.shadcn.com/docs/components/scroll-area): Custom scrollable area with styled scrollbars.
- [Resizable](https://ui.shadcn.com/docs/components/resizable): Resizable panel layout component.

### Overlays & Dialogs

- [Dialog](https://ui.shadcn.com/docs/components/dialog): Modal dialog component.
- [Alert Dialog](https://ui.shadcn.com/docs/components/alert-dialog): Alert dialog for confirmation prompts.
- [Sheet](https://ui.shadcn.com/docs/components/sheet): Slide-out panel component (drawer).
- [Drawer](https://ui.shadcn.com/docs/components/drawer): Mobile-friendly drawer component using Vaul.
- [Popover](https://ui.shadcn.com/docs/components/popover): Floating popover component.
- [Tooltip](https://ui.shadcn.com/docs/components/tooltip): Tooltip component for additional context.
- [Hover Card](https://ui.shadcn.com/docs/components/hover-card): Card that appears on hover.
- [Context Menu](https://ui.shadcn.com/docs/components/context-menu): Right-click context menu.
- [Dropdown Menu](https://ui.shadcn.com/docs/components/dropdown-menu): Dropdown menu component.
- [Menubar](https://ui.shadcn.com/docs/components/menubar): Horizontal menubar component.
- [Command](https://ui.shadcn.com/docs/components/command): Command palette component (cmdk).

### Feedback & Status

- [Alert](https://ui.shadcn.com/docs/components/alert): Alert component for messages and notifications.
- [Toast](https://ui.shadcn.com/docs/components/toast): Toast notification component using Sonner.
- [Progress](https://ui.shadcn.com/docs/components/progress): Progress bar component.
- [Spinner](https://ui.shadcn.com/docs/components/spinner): Loading spinner component.
- [Skeleton](https://ui.shadcn.com/docs/components/skeleton): Skeleton loading placeholder.
- [Badge](https://ui.shadcn.com/docs/components/badge): Badge component for labels and status indicators.
- [Empty](https://ui.shadcn.com/docs/components/empty): Empty state component for no data scenarios.

### Display & Media

- [Avatar](https://ui.shadcn.com/docs/components/avatar): Avatar component for user profiles.
- [Card](https://ui.shadcn.com/docs/components/card): Card container component.
- [Table](https://ui.shadcn.com/docs/components/table): Table component for displaying data.
- [Data Table](https://ui.shadcn.com/docs/components/data-table): Advanced data table with sorting, filtering, and pagination.
- [Chart](https://ui.shadcn.com/docs/components/chart): Chart components using Recharts.
- [Carousel](https://ui.shadcn.com/docs/components/carousel): Carousel component using Embla Carousel.
- [Aspect Ratio](https://ui.shadcn.com/docs/components/aspect-ratio): Container that maintains aspect ratio.
- [Typography](https://ui.shadcn.com/docs/components/typography): Typography styles and components.
- [Item](https://ui.shadcn.com/docs/components/item): Generic item component for lists and menus.
- [Kbd](https://ui.shadcn.com/docs/components/kbd): Keyboard shortcut display component.

### Misc

- [Collapsible](https://ui.shadcn.com/docs/components/collapsible): Collapsible container component.
- [Toggle](https://ui.shadcn.com/docs/components/toggle): Toggle button component.
- [Toggle Group](https://ui.shadcn.com/docs/components/toggle-group): Group of toggle buttons.
- [Pagination](https://ui.shadcn.com/docs/components/pagination): Pagination component for lists and tables.

## Dark Mode

- [Dark Mode](https://ui.shadcn.com/docs/dark-mode): Overview of dark mode implementation.
- [Dark Mode - Next.js](https://ui.shadcn.com/docs/dark-mode/next): Dark mode setup for Next.js.
- [Dark Mode - Vite](https://ui.shadcn.com/docs/dark-mode/vite): Dark mode setup for Vite.
- [Dark Mode - Astro](https://ui.shadcn.com/docs/dark-mode/astro): Dark mode setup for Astro.
- [Dark Mode - Remix](https://ui.shadcn.com/docs/dark-mode/remix): Dark mode setup for Remix.

## Forms

- [Forms Overview](https://ui.shadcn.com/docs/forms): Guide to building forms with shadcn/ui.
- [React Hook Form](https://ui.shadcn.com/docs/forms/react-hook-form): Using shadcn/ui with React Hook Form.
- [TanStack Form](https://ui.shadcn.com/docs/forms/tanstack-form): Using shadcn/ui with TanStack Form.
- [Forms - Next.js](https://ui.shadcn.com/docs/forms/next): Building forms in Next.js with Server Actions.

## Advanced

- [Monorepo](https://ui.shadcn.com/docs/monorepo): Using shadcn/ui in a monorepo setup.
- [React 19](https://ui.shadcn.com/docs/react-19): React 19 support and migration guide.
- [Tailwind CSS v4](https://ui.shadcn.com/docs/tailwind-v4): Tailwind CSS v4 support and setup.
- [JavaScript](https://ui.shadcn.com/docs/javascript): Using shadcn/ui with JavaScript (no TypeScript).
- [Figma](https://ui.shadcn.com/docs/figma): Figma design resources.
- [v0](https://ui.shadcn.com/docs/v0): Generating UI with v0 by Vercel.

## MCP Server

- [MCP Server](https://ui.shadcn.com/docs/mcp): Model Context Protocol server for AI integrations. Allows AI assistants to browse, search, and install components from registries using natural language. Works with Claude Code, Cursor, VS Code (GitHub Copilot), Codex and more.

## Registry

- [Registry Overview](https://ui.shadcn.com/docs/registry): Creating and publishing your own component registry.
- [Getting Started](https://ui.shadcn.com/docs/registry/getting-started): Set up your own registry.
- [Examples](https://ui.shadcn.com/docs/registry/examples): Example registries.
- [FAQ](https://ui.shadcn.com/docs/registry/faq): Common questions about registries.
- [Authentication](https://ui.shadcn.com/docs/registry/authentication): Adding authentication to your registry.
- [Registry MCP](https://ui.shadcn.com/docs/registry/mcp): MCP integration for registries.

### Registry Schemas

- [Registry Schema](https://ui.shadcn.com/schema/registry.json): JSON Schema for registry index files. Defines the structure for a collection of components, hooks, pages, etc. Requires name, homepage, and items array.
- [Registry Item Schema](https://ui.shadcn.com/schema/registry-item.json): JSON Schema for individual registry items. Defines components, hooks, themes, and other distributable code with properties for dependencies, files, Tailwind config, CSS variables, and more.


# Repository Guidelines

## Project Structure & Module Organization
- `app/`: Next.js App Router pages and route segments (`app/rpm/page.tsx`, `app/ccm/page.tsx`, etc.).
- `components/`: Reusable UI and page sections.
- `components/ui/`: Low-level UI primitives (Radix-based wrappers and shared controls).
- `lib/`: Shared utilities (`lib/utils.ts` for class merging and helpers).
- `public/`: Static assets and marketing images (`public/images/*`).
- Root config: `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`.

## Build, Test, and Development Commands
- `npm run dev`: Start local dev server at `http://localhost:3000`.
- `npm run build`: Build a production bundle (use before merging large UI changes).
- `npm run start`: Serve the production build locally.
- `npm run lint`: Run ESLint (Next Core Web Vitals + TypeScript rules).
- Optional package manager parity: `bun dev` also works, but keep lockfile updates intentional.

## Coding Style & Naming Conventions
- Language: TypeScript (`strict` mode enabled in `tsconfig.json`).
- Formatting style in this repo: 2-space indentation, double quotes, no semicolons.
- Components: PascalCase file names and exports (for example, `SiteHeader`, `HeroSection`).
- Routes: folder-based, lowercase segment names under `app/`.
- Imports: prefer alias paths with `@/*` over deep relative imports when practical.
- Styling: Tailwind utility classes in JSX; keep class groups readable and component-focused.

## Testing Guidelines
- There is currently no automated test suite configured (`npm test` is not defined).
- Minimum pre-PR checks: run `npm run lint` and `npm run build`.
- For UI changes, verify affected routes manually (desktop + mobile viewport) and confirm modal/menu interactions.
- If adding tests later, colocate as `*.test.ts(x)` next to the component or route.

## Commit & Pull Request Guidelines
- Follow the existing commit style seen in history: `feat: ...`, `refactor: ...`, etc.
- Write commits in imperative voice and keep each commit scoped to one logical change.
- PRs should include a clear summary of user-visible changes.
- PRs should include a linked issue/ticket when available.
- PRs should include screenshots or short screen recordings for UI updates.
- PRs should include validation notes listing commands run (at least lint/build).

