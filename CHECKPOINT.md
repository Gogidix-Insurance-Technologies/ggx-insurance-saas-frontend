# CHECKPOINT — Gogidix Insurance Technologies Monorepo
> Created: 2026-05-11 | Last CI: `4a8166b` — **ALL 57 JOBS PASSED** ✅

---

## 1. Workspace Layout

```
C:\Users\HP\Desktop\Gogidix-insurance-technologies\
├── business-domain/          ← git: Gogidix-Road-assist/business-domain (branch: dev, Maven)
├── claim-orchestrator/       ← git: Gogidix-Road-assist/claim-orchestrator (branch: dev)
├── foundation-domain/        ← git: Gogidix-Road-assist/foundation-domain (branch: dev, Maven+Node)
├── management-domain/        ← git: Gogidix-Road-assist/management-domain (branch: dev, Maven)
├── shared-business-core/     ← git: Gogidix-Road-assist/shared-business-core (branch: dev, Maven)
├── ggx-insurance-saas-frontend/  ← git subtree/submodule (NOT independent git)
│   ├── .github/workflows/    ← CI/CD pipelines
│   ├── admin-console/        ← React+Vite+Tailwind, port 3001
│   ├── customer-portal/      ← React+Vite+Tailwind, port 3002
│   ├── executive-dashboard/  ← React+Vite+Tailwind, port 3003
│   ├── broker-portal/        ← React+Vite+Tailwind, port 3004
│   ├── hr-portal/            ← React+Vite+Tailwind, port 3010
│   ├── digital-sales-portal/ ← React+Vite+Tailwind, port 3011
│   └── support-center/       ← React+Vite+Tailwind, port 3013
├── .gitignore
└── README.md
```

### GitHub Remote for Frontends
- **Repo**: `Gogidix-Insurance-Technologies/gogidix-insurance-saas-frontend` (PRIVATE)
- **Remote URL**: `https://ggidix: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@github.com/Gogidix-Insurance-Technologies/gogidix-insurance-saas-frontend.git`
- **Default branch**: `dev`
- **Other branches**: `Staging/uat`, `production`, `hotfix`, `main` (legacy)
- **Working directory for frontends git**: `Gogidix-insurance-Saas-frontends/`

### GitHub Remotes for Domain Repos
All under `Gogidix-Road-assist/` org (public):
- `business-domain` → `https://github.com/Gogidix-Road-assist/business-domain.git`
- `claim-orchestrator` → `https://github.com/Gogidix-Road-assist/claim-orchestrator.git`
- `foundation-domain` → `https://github.com/Gogidix-Road-assist/foundation-domain.git`
- `management-domain` → `https://github.com/Gogidix-Road-assist/management-domain.git`
- `shared-business-core` → `https://github.com/Gogidix-Road-assist/shared-business-core.git`

---

## 2. Authentication
- **GitHub token**: `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`
- **GitHub account**: `ggidix`
- **Token stored in**: Windows Credential Manager under `ggidix`
- **gh CLI**: Times out on this machine — use `Invoke-RestMethod` with token header instead

---

## 3. Frontends — Current State

### 7 Insurance SaaS Portals (ALL CI PASSING ✅)
| Portal | Port | Status | Pages |
|--------|------|--------|-------|
| admin-console | 3001 | ✅ | Dashboard, Users, Tenants, Products, System Config, Workflows, API Gateway, Notifications, Audit Log |
| customer-portal | 3002 | ✅ | Dashboard, Policies, Claims, Payments, Products, Profile, Support |
| executive-dashboard | 3003 | ✅ | Overview, Financial, Portfolio, Risk, Operations |
| broker-portal | 3004 | ✅ | Dashboard, Clients, Quote & Bind, Commissions, Book of Business, Renewals |
| hr-portal | 3010 | ✅ | Dashboard, Employees, Leave, Recruitment, Payroll |
| digital-sales-portal | 3011 | ✅ | Dashboard, Campaigns, Leads, Pipeline, Agent Performance |
| support-center | 3013 | ✅ | Dashboard, Inbox, Tickets, Customer 360, Knowledge Base |

### Tech Stack (all 7 frontends)
- React 18 + TypeScript (strict mode)
- Vite 5 build tool
- Tailwind CSS (each portal has unique color theme)
- Recharts for charts
- Lucide React for icons
- No state management library yet (Zustand planned)

### Build Commands
```bash
cd Gogidix-insurance-Saas-frontends/<portal>
npm install --install-strategy=nested --legacy-peer-deps
npm run dev      # Vite dev server
npm run build    # tsc && vite build
```

---

## 4. CI/CD Pipeline (ALL PASSING ✅)

### Workflow: `.github/workflows/ci.yml`
9-stage enterprise pipeline on push to `dev`:
1. **compile-nodes** — `npm install` + `tsc --noEmit` for each frontend
2. **build-nodes** — `npm run build` (Vite production build)
3. **test-nodes** — TypeScript check (repeat for safety)
4. **package** — tar.gz deployment packages
5. **build-docker** — Docker image build (nginx:alpine, push=false)
6. **validate** — Check dist/ has index.html, JS, CSS
7. **security** — npm audit across all frontends
8. **smoke-test** — `serve dist` + curl health check (retry loop, 127.0.0.1)
9. **deploy** — Cloudflare Pages deploy (continue-on-error, secrets not yet set)

### Other Workflows
- `cd-staging.yml` — Deploys to Cloudflare on `Staging/uat` push
- `cd-production.yml` — Approval gate + deploy + health check + rollback
- `hotfix.yml` — Emergency: build → staging → prod → merge-back
- `pr-check.yml` — Quality gate on PRs

### CI Fixes Applied
1. Replaced `@esbuild/win32-x64` → `@esbuild/linux-x64` (CI runs Ubuntu)
2. Removed `dorny/paths-filter` (fails on first push)
3. Removed all unused imports (TS6133 errors) across 13 files
4. Rewrote Claims.tsx status lookup (removed broken statusConfig)
5. Fixed smoke test: retry loop + `127.0.0.1` instead of `localhost`

---

## 5. Domain Repos — Structure

### business-domain/
Insurance business domains with full Backend + Frontend + Documentation per subdomain:
- **individual-insurance-customer** — B2C insurance customers
- **corporate-insurance-customer** — B2B/corporate insurance
- **Mechanics** — Workshop/mechanic management
- **Partners-Towing** — Towing partner management
- **Vendors-Ecommerce** — Vendor marketplace
- **Central-Monitoring** — System monitoring
- **Infrastructure** — API gateway, service registry
- **k8s/** — Kubernetes manifests per domain
- Docker Compose stacks, MongoDB scripts, Prometheus config

### claim-orchestrator/
Claims processing engine:
- `Backend/Java` — Java backend services
- `.github/workflows/` — CI pipeline

### foundation-domain/
Platform foundation services:
- **central-configuration** — Config service
- **centralized-dashboard** — Main dashboard (Backend + Frontend)
- **orchestration-services** — Service orchestration
- **shared-frontend** — Shared frontend components (npm package)
- **shared-libraries** — Shared backend libraries
- **shared-infrastructure** — Infra templates
- **security** — Secrets management, dependency check
- **monitoring/** — Prometheus, Grafana, Loki, Alertmanager
- **k8s/** — Full Kubernetes deployment manifests
- **load-testing/** — Gatling load tests

### management-domain/
Management and admin services:
- **Corporate-Website-Backend/cms-api** — Spring Boot CMS (port 8505)
- **Management-frontends/** — 14 management frontends:
  - Central-Monitoring, Compliance-Risk, Corporate-Website, Country-Admin
  - Customer-Support, Digital-Marketing, Executive-Command, Finance-Settlement
  - Global-Admin, HR, Pricing-Policy, Publisher, Sales, Shared-Services
- **Bridge-Services** — Cross-domain bridge
- **shared-backend** — Shared backend code
- Each subdomain has Backend + Documentation + Frontend

### shared-business-core/
Core shared services:
- **api-gateway/** — API gateway
- **billing/** — billing, payment, pricing, currency, AI pricing engine
- **business-rules/** — policy engine, fraud detection, risk assessment
- **dispatch/** — dispatching, matching, location, alerting
- **fleet/** — fleet management (vehicles, organization, policy, assistance)
- **geolocation/** — geo-location, maps/geocoding
- **notifications/** — notification service, template messaging
- **integrations/** — webhook delivery
- **reporting-service/** — reporting, infra reporting
- **ai-services/** — 28 AI microservices (NLP, vision, analytics, etc.)
- **adapters/** — courier, insurer, payments adapters
- **shared-models/** — common domain models, user profiles, localization
- **shared-events/** — event schemas
- **shared-libraries/** — shared backend libs
- **workflow/** — transaction orchestration

---

## 6. Known Issues & Constraints

### Machine Constraints
- **Never use taskkill** — crashes all terminal sessions
- **Node.js v24.11.0** — npm v11 esbuild bug; use `npm install --install-strategy=nested --legacy-peer-deps`
- **`@esbuild/linux-x64`** required (not `win32-x64`) in all package.json for CI
- **Docker Desktop crashes** locally — use GitHub Actions CI for Docker builds
- **`gh` CLI times out** — use GitHub API with `Invoke-RestMethod`
- **noUnusedLocals + noUnusedParameters** in tsconfig — must clean unused imports

### Codebase Patterns
- TypeScript strict mode, no comments unless asked
- Tailwind CSS (no styled-components)
- Zustand planned for state management
- Recharts for data visualization
- Lucide React for icons
- Vite proxy for dev API routing
- Badge component needs `size` and full `variant` props

### Security
- 7 moderate vulnerabilities (Dependabot alerts) — not yet addressed
- GitHub secrets NOT yet set: `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_API_TOKEN`

---

## 7. Git Commit History (latest first)

```
4a8166b fix: smoke test - retry curl with wait loop and 127.0.0.1
bfbd812 fix: Claims.tsx map closing syntax
9a20c4e fix: Claims.tsx JSX closing syntax
e016994 fix: remove unused imports in executive-dashboard and customer-portal
b111c80 fix(ts): Fix remaining TypeScript errors in all 5 failing frontends
9768e45 fix(ts): Remove all unused imports and fix Badge type errors across all 7 frontends
5ad76a5 fix(ci): Replace @esbuild/win32-x64 with linux-x64, rebuild enterprise pipeline
bab2863 fix(ci): Remove change detection for initial build - always build all frontends
179c6b7 ci: Add enterprise CI/CD pipeline for all 7 frontends
d35cffb feat: Initial commit - 7 GGX Insurance SaaS frontend portals
```

---

## 8. Next Steps (Prioritized)

### Immediate
1. Set up GitHub repo secrets: `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_API_TOKEN`
2. Address 7 Dependabot moderate vulnerabilities
3. Gap analysis of all 7 frontends for missing pages/features

### Short-term
4. Backend API development (Spring Boot microservices per domain)
5. Add Zustand state management to all frontends
6. Add authentication flow (JWT-based, connect to existing auth services)
7. Add API client layer (Axios) to each frontend

### Medium-term
8. Phase 8: 3rd Party Ecosystem frontends (ports 3005-3009)
9. Integration testing across domains
10. Kubernetes deployment configuration
11. Monitoring and observability setup

### Long-term
12. AI services integration (28 microservices in shared-business-core)
13. Multi-tenant configuration
14. Production deployment with Cloudflare Pages
15. Mobile app development

---

## 9. 6 Insurance Products
1. Auto Insurance
2. Home Insurance
3. Health Insurance
4. Gadget Insurance
5. GIT (Goods in Transit) Insurance
6. Haulage Insurance

---

## 10. Quick Reference Commands

### Frontend (from Gogidix-insurance-Saas-frontends/)
```bash
# Install dependencies for a portal
cd admin-console && npm install --install-strategy=nested --legacy-peer-deps

# Dev server
npm run dev

# Type check
npx tsc --noEmit

# Build
npm run build

# Git operations
git add -A && git commit -m "message" && git push origin dev
```

### GitHub API (PowerShell)
```powershell
$headers = @{ Authorization = "token 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"; Accept = "application/vnd.github+json" }
Invoke-RestMethod -Uri "https://api.github.com/repos/Gogidix-Insurance-Technologies/gogidix-insurance-saas-frontend/actions/runs?per_page=5" -Headers $headers
```

### CI Status Check
```powershell
$headers = @{ Authorization = "token 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"; Accept = "application/vnd.github+json" }
$runs = Invoke-RestMethod -Uri "https://api.github.com/repos/Gogidix-Insurance-Technologies/gogidix-insurance-saas-frontend/actions/runs?per_page=1" -Headers $headers
$latest = $runs.workflow_runs[0]
"$($latest.status) | $($latest.conclusion) | $($latest.head_sha.Substring(0,7))"
```
