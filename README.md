# Cogriss Website

A clean local-development version of the Cogriss company website.

## Requirements

- Node.js 20.9 or newer (Node.js 22 LTS is recommended)
- npm 10 or newer

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To stop the development server, press `Ctrl + C`.

## Production check

```bash
npm run build
npm start
```

Then open [http://localhost:3000](http://localhost:3000).

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Starts the development server with hot reload |
| `npm run build` | Creates an optimized production build |
| `npm start` | Runs the completed production build |
| `npm run lint` | Checks the source code for lint problems |

## Tech stack

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS 4 plus custom CSS
- Radix UI primitives for accessible dialogs and accordions
- Lucide React icons
- cmdk for the keyboard search interface

## Project architecture

```text
cogriss-website-local/
├── app/                     # Routes, layouts and global styling
│   ├── blog/[slug]/         # Dynamic article details
│   ├── legal/[slug]/        # Dynamic legal pages
│   ├── services/[slug]/     # Dynamic service details
│   ├── work/[slug]/         # Dynamic project details
│   ├── layout.tsx           # Shared page shell and metadata
│   ├── page.tsx             # Homepage
│   └── globals.css          # Design system and responsive styles
├── components/
│   ├── cogriss.tsx          # Product journey, search and filters
│   ├── portfolio.tsx        # Projects, testimonials and team modules
│   ├── site.tsx             # Header, footer, forms and shared sections
│   └── ui/                  # Only the UI primitives used by the site
├── lib/
│   ├── articles.ts          # Insight/article content
│   ├── content.ts           # Services, packages and project content
│   ├── legal.ts             # Draft legal-page content
│   └── utils.ts             # Shared class-name helper
├── public/
│   ├── projects/            # Portfolio screenshots
│   └── team/                # Replaceable team portrait placeholders
├── package.json             # Dependencies and npm commands
└── next.config.ts           # Next.js configuration
```

## Content editing guide

- Homepage: `app/page.tsx`
- Global design and responsive styling: `app/globals.css`
- Services, projects, testimonials, team and packages: `lib/content.ts`
- Articles: `lib/articles.ts`
- Legal drafts: `lib/legal.ts`
- Navigation, footer and enquiry form: `components/site.tsx`

## Important note

The enquiry form currently validates input and downloads a project brief in the browser. It does not email or save submissions. Connect a server-side email or CRM service before using it for live lead collection.

Project information and images were adapted from the supplied portfolio. Testimonial wording is marked as sample content and must be replaced with approved client feedback. Team portraits are labelled placeholders; replace the corresponding files in `public/team/` while keeping the filenames unchanged.
