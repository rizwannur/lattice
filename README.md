<p align="center">
  <img src="https://img.shields.io/badge/Lattice-Multi--tenant%20Platform-0f172a?style=for-the-badge&labelColor=334155" alt="Lattice" />
</p>

<p align="center">
  <strong>Small businesses.</strong> <em>Big connections.</em>
</p>

<p align="center">
  One codebase · Subdomain routing · Landing + tenant dashboard · Open source
</p>

<p align="center">
  <a href="#-getting-started">Quick Start</a> •
  <a href="#-status">Status</a> •
  <a href="#-roadmap">Roadmap</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-contributing">Contributing</a> •
  <a href="#-author">Author</a>
</p>

<p align="center">
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-16-000?style=flat-square&logo=next.js" alt="Next.js" /></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react" alt="React" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript" alt="TypeScript" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwindcss" alt="Tailwind" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="MIT" /></a>
</p>

---

<br />

## 📋 Table of Contents

| Section | Description |
| :--- | :--- |
| [About](#-about) | What Lattice is and why it exists |
| [Status](#-status) | Current phase and what's done vs planned |
| [Preview](#-preview) | Screenshot and visual overview |
| [Features](#-features) | What the platform offers today |
| [Roadmap](#-roadmap) | Planned work and how you can help |
| [Tech Stack](#-tech-stack) | Technologies and tools |
| [Project Structure](#-project-structure) | Codebase layout |
| [Getting Started](#-getting-started) | Install, run, and configure |
| [Architecture](#-architecture) | How multi-tenancy works |
| [Scripts](#-scripts) | Available bun commands |
| [Deployment](#-deployment) | Production deployment notes |
| [Contributing](#-contributing) | How to contribute (open source) |
| [Author](#-author) | Maintainer and links |
| [License](#-license) | MIT license |

---

<br />

## 📖 About

**Lattice** is an open-source multi-tenant B2B platform that connects small businesses with larger enterprises. One application serves a public **landing experience** and per-tenant **dashboards** — each tenant gets its own subdomain, shared design system, and a full app shell.

<table>
<tr>
<td width="50%">

**Today**

- Subdomain-based routing (e.g. `acme.yourdomain.com`)
- Single codebase for marketing site and tenant app
- Type-safe stack: Next.js 16, React 19, TypeScript 5
- Responsive dashboard with collapsible sidebar

</td>
<td width="50%">

**Direction**

- Replace in-memory tenant data with a database or API
- Add auth, admin UI, and tenant management
- Deploy to Vercel (or any Node host) with wildcard DNS
- See [Roadmap](#-roadmap) for planned work

</td>
</tr>
</table>

> **TL;DR** — One repo. Subdomain per tenant. Landing + dashboard. Open source. Built to scale.

---

<br />

## 📌 Status

Lattice is **early stage** and actively being expanded. Contributions and feedback are welcome.

| Area | Status | Notes |
| :--- | :--- | :--- |
| **Landing** | Done | Hero, features, partners, testimonials, CTA |
| **Subdomain routing** | Done | proxy.ts + `/s/[subdomain]`; local + production |
| **Tenant dashboard shell** | Done | Sidebar, breadcrumbs, viewport-fitted layout |
| **Tenant data** | In progress | In-memory in `lib/tenants.ts`; DB/API planned |
| **Auth** | Not started | Auth and tenant-scoped sessions planned |
| **Admin UI** | Not started | Tenant CRUD, settings, usage planned |
| **API / Backend** | Not started | Tenant and app APIs planned |
| **Docs** | Not started | API docs, deployment guide, contributing guide planned |

---

<br />

## 🖼 Preview

<p align="center">
  <kbd>
    <img src="https://placehold.co/1100x580/1e293b/94a3b8?text=Lattice+%E2%80%94+Landing+%26+Tenant+Dashboard" alt="Lattice preview" width="900" style="border-radius: 8px;" />
  </kbd>
</p>

<p align="center">
  <sub><i>Replace the image URL above with your own screenshot (e.g. from GitHub Releases or a CDN).</i></sub>
</p>

---

<br />

## ✨ Features

**Currently implemented**

| Feature | Description |
| :--- | :--- |
| **Subdomain tenancy** | Each tenant: `tenant.yourdomain.com`; local: `admin.localhost:3000` |
| **Single codebase** | Landing and tenant app share components and design tokens |
| **Responsive dashboard** | Collapsible sidebar, icon mode, breadcrumbs, viewport-fitted layout |
| **Landing experience** | Hero, features, partners, testimonials, trust block, CTA |
| **Type-safe** | Full TypeScript; tenant data and UI typed end-to-end |
| **Modern tooling** | Turbopack dev server, Tailwind 4, React 19 |

---

<br />

## 🗺 Roadmap

Planned work and areas where the project will grow. If you want to contribute, these are good places to start.

| Priority | Area | Description |
| :--- | :--- | :--- |
| High | **Tenant data** | Move from in-memory to database or API (e.g. Postgres, Drizzle, or REST) |
| High | **Auth** | Authentication and tenant-scoped sessions (e.g. NextAuth, Clerk) |
| High | **Admin UI** | Create/edit/delete tenants, basic settings, usage or billing placeholders |
| Medium | **API** | REST or tRPC API for tenants and app data |
| Medium | **Docs** | Contributing guide, deployment runbook, API docs |
| Medium | **Tests** | Unit and e2e tests (e.g. Vitest, Playwright) |
| Later | **Billing** | Stripe or similar for tenant billing |
| Later | **Custom domains** | Optional custom domain per tenant |
| Later | **i18n** | Internationalization for landing and dashboard |

Ideas or feature requests? Open an [issue](https://github.com/rizwannur/lattice/issues).

---

<br />

## 🛠 Tech Stack

| Layer | Choice |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| **UI** | [React 19](https://react.dev/), [Base UI](https://base-ui.com/), [Tabler Icons](https://tabler.io/icons) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **Motion** | [Framer Motion](https://www.framer.com/motion/) |
| **State** | [Zustand](https://github.com/pmndrs/zustand) |
| **Language** | TypeScript 5.x |

---

<br />

## 📁 Project Structure

```text
lattice/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout, metadata
│   │   ├── page.tsx                # Landing page
│   │   └── s/[subdomain]/          # Tenant app (dashboard + page)
│   ├── components/
│   │   ├── dashboard/              # Sidebar, nav, app shell
│   │   ├── landing/                # Navbar, Footer, Hero, Features, CTA
│   │   └── ui/                     # Buttons, cards, sidebar, dropdowns
│   ├── lib/
│   │   ├── tenants.ts              # Subdomain → tenant data
│   │   ├── utils.ts                # cn, protocol, rootDomain
│   │   └── format.ts
│   ├── stores/                     # Landing state (Zustand)
│   ├── types/
│   └── proxy.ts                    # Subdomain detection & rewrite
├── components.json
├── next.config.ts
└── package.json
```

As the project grows, expect new directories (e.g. `src/app/api/`, `src/lib/db/`, `docs/`).

---

<br />

## 🚀 Getting Started

### Prerequisites

- **[Bun](https://bun.sh/)** (recommended) or **Node.js 18+**
- **Git**

### Quick Start

```bash
git clone https://github.com/rizwannur/lattice.git
cd lattice
bun install
bun dev
```

### Where to open

| URL | Purpose |
| :--- | :--- |
| [http://localhost:3000](http://localhost:3000) | Landing page |
| [http://admin.localhost:3000](http://admin.localhost:3000) | Tenant: Admin |
| `http://ngo.localhost:3000` | Tenant: NGO |
| `http://business.localhost:3000` | Tenant: Business |

### Environment (optional)

Create `.env.local` in the project root for a custom root domain (e.g. in production):

```env
NEXT_PUBLIC_ROOT_DOMAIN=yourdomain.com
```

If unset, the app uses `localhost:3000` for links and redirects.

---

<br />

## 🏗 Architecture

1. **proxy.ts** — Runs on each request; reads the host and derives the subdomain (e.g. `admin` from `admin.localhost:3000` or `admin.yourdomain.com`).
2. **Rewrite** — If a subdomain is present, the request is rewritten to `/s/[subdomain]/*`; the App Router serves the tenant layout and page.
3. **lib/tenants.ts** — Maps subdomain to tenant data (title, description, emoji). Replace with a database or API when you need persistent tenants.
4. **Domains** — Root domain serves the landing page; subdomains serve the tenant dashboard.

---

<br />

## 📜 Scripts

| Command | Description |
| :--- | :--- |
| `bun dev` | Start development server (Turbopack) |
| `bun run build` | Production build |
| `bun start` | Run production server |

---

<br />

## 🌐 Deployment

| Platform | Notes |
| :--- | :--- |
| **Vercel** | Connect the repo, set `NEXT_PUBLIC_ROOT_DOMAIN`, add wildcard DNS `*.yourdomain.com` for tenant subdomains. |
| **Other** | Node 18+, run with `next start`; point all tenant subdomains to the same deployment. |

---

<br />

## 🤝 Contributing

Lattice is **open source**. Contributions are welcome: bug reports, ideas, docs, and code.

1. **Fork** the repo and clone your fork.
2. **Branch** from `main` (e.g. `feature/tenant-api` or `fix/sidebar-mobile`).
3. **Change** — keep scope focused; follow existing code style and TypeScript.
4. **Test** — run `bun dev` and `bun run build`; add tests if you can.
5. **Commit** with a clear message (e.g. `feat: add tenant list API`).
6. **Push** to your fork and open a **Pull Request** against `main`.

- **Issues:** [Open an issue](https://github.com/rizwannur/lattice/issues) for bugs or feature requests.
- **Ideas:** Check the [Roadmap](#-roadmap) for planned work, or suggest something new in an issue.
- **Docs:** A `CONTRIBUTING.md` with more detail may be added later; for now, this section and the roadmap are the guide.

---

<br />

## 👤 Author

**Rizwan Nur**

| Link | URL |
| :--- | :--- |
| **GitHub** | [@rizwannur](https://github.com/rizwannur) |
| **Project** | [Lattice](https://github.com/rizwannur/lattice) |

---

<br />

## 📄 License

This project is licensed under the **MIT License**. You may use it as a template, reference, or base for your own multi-tenant product. See the [LICENSE](LICENSE) file for details.

---

<p align="center">
  <strong>Lattice</strong> — Small businesses. Big connections.
</p>

<p align="center">
  <sub>Open source. If you find this useful, consider giving it a star or contributing.</sub>
</p>
