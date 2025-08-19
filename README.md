# DevSpot Interview Assignment

## How to run locally

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

4. **Run tests:**
   ```bash
   npm test
   # or
   yarn test
   ```

## Tech stack choices
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **State/Data:** React Query (TanStack Query)
- **Testing:** Jest, React Testing Library, jest-dom
- **Other:** class-variance-authority, tailwindcss-animate

## Notes on what I’d improve with more time
- Add end-to-end tests (e.g. Playwright or Cypress)
- Add Storybook for isolated component development
- Add CI/CD pipeline for automated testing and deployment

## Brief explanation of component structure
- **src/app/**: Next.js App Router pages, layouts, and API routes
- **src/components/common/**: Reusable UI primitives (Button, Card, Skeleton, Pagination, etc.)
- **src/components/icons/**: All SVG icon components
- **src/layouts/**: Main layout, sidebars, and footer
- **src/sections/applicants/**: Feature-specific components for applicants (ApplicantCard, ApplicantBanner, StatusToggle, etc.)
- **src/types/**: TypeScript interfaces for applicants and related data
- **src/lib/**: Mock data JSON files
- **__tests__/**: All unit tests for components and sections (Jest + React Testing Library)

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
