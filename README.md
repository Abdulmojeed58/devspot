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