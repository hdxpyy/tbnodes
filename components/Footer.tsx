import Image from "next/image";
import Link from "next/link";
import { Receipt } from "lucide-react";
import {
  BILLING_URL,
  DISCORD_URL,
  LEGAL,
  NAV,
  SITE,
  SUPPORT_EMAIL,
  SUPPORT_MAILTO,
} from "@/config/site";
import { DiscordIcon, GmailIcon } from "./icons/BrandIcons";

const linkCls = "text-xs sm:text-sm text-muted transition-colors hover:text-ice";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line/80 bg-ink/80 px-5 pb-10 pt-16 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        {/* Brand identity column */}
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="TBNODES logo"
              width={48}
              height={48}
              className="h-11 w-11 object-contain"
            />
            <span className="font-display text-xl font-extrabold tracking-wider text-white">
              TBNODES
            </span>
          </div>
          <p className="mt-3 text-xs font-bold tracking-wider text-ice uppercase">
            {SITE.tagline}
          </p>
          <p className="mt-3 max-w-sm text-xs sm:text-sm text-muted leading-relaxed">
            Premium Minecraft and VPS hosting solutions for gamers, creators, and developers. Built on enterprise infrastructure in Delhi, India.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="mb-4 font-display text-sm font-semibold tracking-wide text-white uppercase">
            Quick links
          </h3>
          <ul className="space-y-2.5">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link className={linkCls} href={n.href}>
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className={linkCls} href="/faq">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Important links & legal policies */}
        <div>
          <h3 className="mb-4 font-display text-sm font-semibold tracking-wide text-white uppercase">
            Important links
          </h3>
          <ul className="space-y-2.5">
            <li>
              <a className={linkCls} href={BILLING_URL}>
                Billing Portal
              </a>
            </li>
            <li>
              <a
                className={linkCls}
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord Community
              </a>
            </li>
            {LEGAL.map((l) => (
              <li key={l.href}>
                <Link className={linkCls} href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Verified contact channels with official brand SVGs */}
        <div>
          <h3 className="mb-4 font-display text-sm font-semibold tracking-wide text-white uppercase">
            Contact &amp; Support
          </h3>
          <ul className="space-y-3.5 text-xs sm:text-sm">
            <li>
              <a
                className="flex items-center gap-2.5 text-muted hover:text-ice transition-colors group"
                href={SUPPORT_MAILTO}
                aria-label="Send email to support@tbodes.com"
              >
                <GmailIcon className="h-4 w-4 shrink-0 transition-transform group-hover:scale-110" />
                <span className="truncate">{SUPPORT_EMAIL}</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-2.5 text-muted hover:text-ice transition-colors group"
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join TBNODES Discord Server"
              >
                <DiscordIcon className="h-4 w-4 shrink-0 text-[#5865F2] transition-transform group-hover:scale-110" />
                <span>discord.gg/66VWCGbe6V</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-2.5 text-muted hover:text-ice transition-colors group"
                href={BILLING_URL}
                aria-label="Open TBNODES Billing Portal"
              >
                <Receipt size={16} className="text-neon shrink-0 transition-transform group-hover:scale-110" />
                <span>billing.tbnodes.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-line/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
        <p>© {new Date().getFullYear()} TBNODES. All rights reserved.</p>
        <p className="text-[11px] text-muted/70">
          POWERED FOR PERFORMANCE. Delhi, India.
        </p>
      </div>
    </footer>
  );
}
