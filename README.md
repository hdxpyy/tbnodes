# TBNODES — Production Brand Website

High-Performance Brand & Marketing Website for **TBNODES** (Minecraft Server Hosting & VPS Hosting in Delhi, India).

Built with **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, **Three.js / React Three Fiber / @react-three/drei**, and **Framer Motion**.

---

## 🚀 Quick Start & Development

### 1. Prerequisites
- Node.js 18.17+ or 20+
- npm or pnpm

### 2. Local Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Website available at: http://localhost:3000

# Production build check
npm run build

# Start production server
npm start
```

---

## 🌐 Centralized Configuration

All external links, pricing tiers, and business details are centralized:
- `config/site.ts` — Brand identity, URLs (`BILLING_URL = "https://billing.tbnodes.com"`), Discord URL, support email, datacenter location (`Delhi, India`), and main navigation routes.
- `config/plans.ts` — Single source of truth for all Minecraft plans (Dirt to Warden) and VPS plans (Intel Platinum and AMD Ryzen).
- `config/faq.ts` — 13 comprehensive, verified FAQ questions and answers.
- `components/icons/GameIcons.tsx` — Authentic Minecraft block textures (Dirt, Stone, Copper, Iron, Gold, Emerald, Diamond, Netherite) and mob icons (Zombie, Skeleton, Creeper, Enderman, Wither, Warden, and VPS mob avatars).
- `components/icons/BrandIcons.tsx` — Official brand SVGs for Discord and Gmail.

---

## 🚢 Vercel Production Deployment

### Step 1: Push Repository to GitHub / GitLab
```bash
git add .
git commit -m "feat: complete TBNODES brand website and SEO upgrade"
git push origin main
```

### Step 2: Import into Vercel
1. Log in to [vercel.com](https://vercel.com) and click **"Add New"** → **"Project"**.
2. Select your `tb-nodes` repository.
3. Keep Framework Preset as **Next.js**.
4. Root Directory: `./` (default).
5. Build Command: `next build` (default).
6. Output Directory: `.next` (default).
7. No environment variables are required for this static/marketing frontend.
8. Click **Deploy**.

### Step 3: Custom Domain Setup (`www.tbnodes.com`)
1. In your Vercel Project Dashboard, go to **Settings** → **Domains**.
2. Add:
   - `www.tbnodes.com` (Recommended primary domain)
   - `tbnodes.com` (Set up automatic 308 redirect to `www.tbnodes.com`)
3. Configure your DNS provider with the DNS records displayed by Vercel:
   - **Type `CNAME`**: Name `www` → Value `cname.vercel-dns.com`
   - **Type `A`**: Name `@` → Value `76.76.21.21`
4. Once DNS propagates, Vercel will automatically provision a valid Let's Encrypt SSL/TLS certificate.

---

## 🔍 Google Search Console & SEO Setup

### Step 1: Domain Property Verification
1. Go to [Google Search Console](https://search.google.com/search-console).
2. Choose **Domain** property and enter `tbnodes.com`.
3. Copy the provided TXT verification record (e.g., `google-site-verification=...`).
4. Go to your DNS provider (Cloudflare, Namecheap, GoDaddy, etc.) and add:
   - **Type**: `TXT`
   - **Name**: `@`
   - **Content**: `google-site-verification=...`
5. Return to Google Search Console and click **Verify**.

### Step 2: Submit Sitemap
1. In the left navigation of Google Search Console, click on **Sitemaps**.
2. Under "Add a new sitemap", enter:
   ```text
   sitemap.xml
   ```
3. Click **Submit**.
4. Verify that the sitemap status reports **"Success"** and shows all 12 public routes:
   - `/` (Homepage)
   - `/minecraft`
   - `/vps/intel`
   - `/vps/ryzen`
   - `/features`
   - `/network`
   - `/about`
   - `/support`
   - `/faq`
   - `/terms`
   - `/privacy`
   - `/refund`

### Step 3: URL Inspection & Indexing Request
1. In Google Search Console, paste your canonical URL: `https://www.tbnodes.com/` into the top search bar.
2. Click **"Test Live URL"** to confirm that Googlebot can access and render your HTML.
3. Click **"Request Indexing"**.
4. Repeat URL Inspection for your key conversion pages: `/minecraft`, `/vps/intel`, and `/vps/ryzen`.

### Step 4: Validate Structured Data (Schema.org)
1. Visit [Google Rich Results Test](https://search.google.com/test/rich-results).
2. Enter `https://www.tbnodes.com/` and `https://www.tbnodes.com/faq`.
3. Confirm detection of:
   - **Organization** (`TBNODES`, logo, contact, social)
   - **WebSite**
   - **ItemList / Product Offers** (Dirt to Warden, Intel VPS)
   - **FAQPage**
   - **BreadcrumbList**

---

## 📋 Owner Verification Checklist Before Launch
1. **Warden Plan Storage**:
   - Specified as **6GB NVMe SSD** in supplied plans. Flagged for owner confirmation in `config/plans.ts` and on the pricing card.
2. **Support Email**:
   - Supplied as `support@tbodes.com` (configured in `config/site.ts`). Confirm whether the domain is `tbodes.com` or `tbnodes.com`.
3. **Legal Policies (Terms, Privacy, Refund)**:
   - Professional editable drafts have been generated in `app/terms`, `app/privacy`, and `app/refund`. Review bracketed placeholders before public commercial enforcement.
4. **Discord Link**:
   - Verified active invite: `https://discord.gg/66VWCGbe6V`.
5. **Billing Portal**:
   - All purchase and order buttons direct smoothly to `https://billing.tbnodes.com`.
