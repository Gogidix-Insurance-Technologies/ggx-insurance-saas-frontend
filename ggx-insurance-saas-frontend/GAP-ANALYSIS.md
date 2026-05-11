# GGX Insurance SaaS — Frontend Gap Analysis Report
> Date: 2026-05-11 | Audited: All 7 Portals | CI Status: GREEN (57/57 jobs passing)

---

## Executive Summary

All 7 frontends are **static UI prototypes** — visually complete wireframes with zero functional depth.

| Portal | Pages | Lines | Dead Buttons | Working Interactions | Production Ready |
|--------|-------|-------|-------------|---------------------|-----------------|
| admin-console | 9 | 863 | ~25 | 4 search filters | ~5% |
| customer-portal | 7 | 509 | ~15 | 1 search + 1 edit toggle | ~10% |
| executive-dashboard | 5 | 463 | 0 | 0 | ~5% |
| broker-portal | 6 | 419 | ~10 | 1 search + 1 product select | ~10% |
| hr-portal | 5 | 368 | 2 | 1 search filter | ~5% |
| digital-sales-portal | 5 | 285 | ~8 | 1 search filter | ~8% |
| support-center | 5 | 327 | ~8 | 2 search + 1 conversation select | ~10% |

**Total**: 42 pages, ~3,234 lines of application code, ~70 non-functional buttons.

---

## Universal Gaps (All 7 Portals)

Every portal shares these critical deficiencies:

### 1. Zero API Integration
- No Axios, no fetch wrappers, no API client files
- No TanStack Query, no SWR, no data-fetching hooks
- All data is hardcoded `const` arrays at the top of each page
- No `.env` files or `VITE_API_URL` configuration

### 2. Zero Authentication
- No login page in any portal
- No JWT token handling
- No protected routes or auth guards
- No role-based access control
- User names/avatars are hardcoded strings

### 3. Zero State Management
- No Zustand, no Context API, no Redux
- Only `useState` for local UI toggles (search, sidebar)
- No shared state between pages

### 4. Zero Loading States
- No spinners, skeletons, shimmer effects, or "Loading..." text

### 5. Zero Error Handling
- No ErrorBoundaries, no error toasts, no retry logic, no fallback UI

### 6. Zero Empty States
- No "No data found" messages when lists are empty or search returns nothing

### 7. Zero Form Handling
- No react-hook-form, no Formik, no zod/yup validation
- All "Create", "Edit", "Add" buttons are decorative (no onClick handlers)
- SystemConfig in admin-console has zero input elements despite being a "config" page

### 8. Zero Pagination
- All tables/lists render complete datasets
- AuditLog has cosmetic pagination chrome with no logic

### 9. Minimal Shared Components
- Each portal has only: `Card`, `MetricCard`/`Metric`, `Badge` (3 components)
- Missing across ALL portals: Modal, DataTable, FormInput, FormSelect, Spinner, EmptyState, Toast, Tabs, Pagination, Avatar, ConfirmDialog, FileUpload, DatePicker, Dropdown, ErrorBoundary

### 10. No 404 Page
- No `<Route path="*">` catch-all in any portal's App.tsx

### 11. No Tests
- Zero `.test.tsx` or `.spec.tsx` files across all 7 frontends

### 12. No Accessibility
- No `aria-*` attributes, no keyboard navigation, no screen reader support

---

## Per-Portal Specific Gaps

### Admin Console (port 3001) — 9 pages
| Missing Page | Priority |
|-------------|----------|
| Roles & Permissions | HIGH — dead link in sidebar already |
| Billing/Payments | MEDIUM |
| Reports & Analytics | MEDIUM |
| Integrations/Webhooks | LOW |
| 404 Not Found | HIGH |

**Key issues**: SystemConfig has zero form inputs, WorkflowEngine has no visual editor, ApiGateway shows static metrics with no real-time data.

### Customer Portal (port 3002) — 7 pages
| Missing Feature | Priority |
|----------------|----------|
| Claim filing wizard (multi-step form) | CRITICAL |
| Quote wizard / product detail page | CRITICAL |
| Payment gateway integration | CRITICAL |
| Policy detail view with documents | HIGH |
| File upload for claims/documents | HIGH |
| KYC/document management | MEDIUM |
| Notification preferences | LOW |

**Key issues**: Profile edit toggle loses changes on re-render (uses `defaultValue`), Support page buttons should use `tel:`/`mailto:` links.

### Executive Dashboard (port 3003) — 5 pages
| Missing Feature | Priority |
|----------------|----------|
| Global date range picker | CRITICAL |
| P&L / Income Statement view | HIGH |
| CAT exposure map | HIGH |
| Stress testing controls | MEDIUM |
| Geographic map view | MEDIUM |
| Export to PDF/Excel | MEDIUM |
| Settings page | LOW |

**Key issues**: All risk metrics show "healthy" (unrealistic), no period-over-period comparison anywhere, no real-time data feeds.

### Broker Portal (port 3004) — 6 pages
| Missing Page | Priority |
|-------------|----------|
| Claims management | HIGH |
| Policy servicing (endorsements, cancellations) | HIGH |
| Documents & correspondence | MEDIUM |
| Reports & analytics | MEDIUM |
| Client detail page (`/clients/:id`) | HIGH |
| Quote detail/versioning | MEDIUM |

**Key issues**: QuoteBind is the most interactive page but Calculate Premium and Send Quote do nothing, no "Bind" workflow to convert quotes to policies, commission data has no reconciliation.

### HR Portal (port 3010) — 5 pages
| Missing Page | Priority |
|-------------|----------|
| Employee detail page (`/employees/:id`) | HIGH |
| Leave calendar view | HIGH |
| Applicant tracking pipeline (Kanban) | HIGH |
| Payslip generation | MEDIUM |
| Performance reviews | MEDIUM |
| Training & development | LOW |

**Key issues**: LeaveManagement has no approve/reject buttons (core function missing), Recruitment says "ATS" but has no applicant tracking, Payroll has no processing workflow.

### Digital Sales Portal (port 3011) — 5 pages
| Missing Feature | Priority |
|----------------|----------|
| Drag-and-drop sales pipeline (Kanban) | CRITICAL |
| Campaign creation wizard | HIGH |
| Lead detail view with activity timeline | HIGH |
| Agent commission view | MEDIUM |
| Forecast/prediction view | MEDIUM |
| Deal creation form | HIGH |

**Key issues**: SalesPipeline is completely static (should be Kanban), campaign budget parsing is buggy (mixes M/K units), agent revenue parsing uses fragile regex.

### Support Center (port 3013) — 5 pages
| Missing Feature | Priority |
|----------------|----------|
| Send message actually working | CRITICAL |
| Conversation switching (loads different messages) | CRITICAL |
| Ticket detail view | HIGH |
| Customer 360 detail page | HIGH |
| Article editor (rich text) | HIGH |
| SLA countdown timers (live) | MEDIUM |
| Bulk actions on tickets | MEDIUM |

**Key issues**: Inbox Send button does nothing, switching conversations doesn't load that conversation's messages, no real-time chat capability.

---

## Recommended Implementation Priority

### Phase 1: Foundation (Do First — All Portals)
These are cross-cutting concerns that unblock all other work:

1. **Shared component library** — Build once, use in all 7 portals:
   - Modal/Dialog, DataTable, FormInput, FormSelect, Spinner/Skeleton, EmptyState, Toast, Pagination, ConfirmDialog, Tabs
2. **API client layer** — Axios instance + TanStack Query setup per portal
3. **Auth system** — Login page + JWT handling + protected routes
4. **Zustand stores** — User session, notifications, feature flags

### Phase 2: Critical Missing Pages
5. Admin: Roles & Permissions page
6. Customer: Claim filing wizard, Quote wizard
7. Broker: Claims management, Client detail page
8. HR: Employee detail, Leave calendar, ATS pipeline
9. Sales: Kanban pipeline, Campaign wizard
10. Support: Working inbox chat, Ticket detail, Customer 360 detail

### Phase 3: Enhancement
11. Loading skeletons for all pages
12. Error boundaries + error toasts
13. Empty state illustrations
14. Date range pickers (especially executive dashboard)
15. Export functionality (CSV/PDF)
16. Real-time data (WebSocket/polling)
17. Form validation (zod + react-hook-form)

### Phase 4: Polish
18. Accessibility (ARIA labels, keyboard nav)
19. Dark mode support
20. i18n/internationalization
21. Unit/integration tests
22. Performance optimization (lazy loading, code splitting)

---

## Line Counts by Portal

| Portal | Page Lines | Layout Lines | Shared Lines | Total |
|--------|-----------|-------------|-------------|-------|
| admin-console | 863 | 74 | 93 | 1,030 |
| customer-portal | 509 | 64 | 46 | 619 |
| executive-dashboard | 463 | 62 | 45 | 570 |
| broker-portal | 419 | 42 | 20 | 481 |
| hr-portal | 368 | 46 | 21 | 435 |
| digital-sales-portal | 285 | 35 | 20 | 340 |
| support-center | 327 | 35 | 19 | 381 |
| **Total** | **3,234** | **358** | **264** | **3,856** |
