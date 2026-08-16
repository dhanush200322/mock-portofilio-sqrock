# Production Deployment Guide // Vercel & Edge CDN

This guide details the step-by-step instructions for deploying the **personal-portfolio** application to production via Vercel (recommended) or any modern edge hosting platform.

---

## 1. Quick Deploy via Vercel Git Integration (Recommended)

Since the codebase is already hosted on GitHub at:
`https://github.com/dhanush200322/mock-portofilio-sqrock.git`

Follow these 3 simple steps to deploy with automatic CI/CD:

1. **Log in to Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. **Import Repository**:
   - Click **"Add New..."** → **"Project"**.
   - Select the repository **`mock-portofilio-sqrock`** from your GitHub list.
3. **Configure & Deploy**:
   - **Framework Preset**: `Next.js` (automatically detected).
   - **Root Directory**: `./` (default).
   - **Build Command**: `npm run build` (or Next.js default).
   - **Output Directory**: `.next` (default).
   - **Environment Variables**: None required (100% frontend static).
   - Click **"Deploy"**.

Vercel will compile the project, run TypeScript checks, generate all static routes and OpenGraph images, and assign a live production URL (e.g. `https://mock-portofilio-sqrock.vercel.app` or your custom domain).

---

## 2. CLI Deployment via Terminal (Alternative)

If you prefer deploying directly from your terminal:

```bash
# 1. Log in to Vercel
npx vercel login

# 2. Link and deploy preview
npx vercel

# 3. Deploy to production
npx vercel --prod
```

---

## 3. Custom Domain Configuration

To connect a custom domain (e.g. `dhanush.dev` or `dhanush-portfolio.com`):

1. In the Vercel Project Dashboard, navigate to **Settings** → **Domains**.
2. Enter your custom domain and click **Add**.
3. In your DNS registrar (e.g., Cloudflare, Namecheap, GoDaddy), configure:
   - **A Record**: `@` → `76.76.21.21`
   - **CNAME Record**: `www` → `cname.vercel-dns.com`
4. Once verified, Vercel automatically provisions free SSL/TLS certificates and global Anycast routing.

---

## 4. Production Build Verification Commands

Before every deployment, verify build integrity locally:

```bash
# Linting
npm run lint

# Strict TypeScript typechecking
npm run typecheck

# Production build compilation
npm run build

# Security vulnerability audit
npm audit
```

---

## 5. Rollback & Instant Recovery

- Vercel retains immutable deployment snapshots for every git push.
- If an issue is detected, you can roll back instantly to any previous successful deployment via the **Deployments** tab by clicking **"Promote to Production"** (0-second downtime).
