"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { BILLING_URL, DISCORD_URL, NAV } from "@/config/site";
import { DiscordIcon } from "./icons/BrandIcons";

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const last = useRef(0);

  useEffect(() => setOpen(false), [path]);

  useEffect(() => {
    const on = () => {
      const y = window.scrollY;
      if (y > last.current && y > 140) setHidden(true);
      else if (y < last.current) setHidden(false);
      last.current = y;
    };
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const active = (href: string) => (href === "/" ? path === "/" : path.startsWith(href));

  return (
    <motion.header
      className="fixed inset-x-0 top-3 z-50 px-3 sm:px-4"
      animate={{ y: hidden && !open ? -100 : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="glass mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl px-3 sm:px-5">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="TBNODES home">
          <Image
            src="/logo.png"
            alt="TBNODES official logo"
            width={38}
            height={38}
            priority
            className="h-9 w-9 object-contain transition-transform group-hover:scale-105"
          />
          <span className="font-display text-lg font-extrabold tracking-wider text-white">
            TBNODES
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main Navigation">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`relative rounded-lg px-3 py-2 text-xs xl:text-sm font-medium transition-colors hover:bg-brand/10 hover:text-white ${
                active(n.href) ? "text-white font-semibold" : "text-muted"
              }`}
            >
              {n.label}
              {active(n.href) && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded bg-gradient-to-r from-brand to-neon"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop Action Links */}
        <div className="hidden items-center gap-2.5 xl:flex">
          <a
            href={BILLING_URL}
            className="btn-ghost !px-4 !py-2.5 text-xs font-semibold"
          >
            Billing
          </a>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !px-4 !py-2.5 text-xs font-semibold flex items-center gap-2"
          >
            <DiscordIcon className="h-4 w-4 text-white" />
            <span>Join Discord</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="grid h-10 w-10 place-items-center rounded-lg text-white xl:hidden hover:bg-white/5 transition-colors"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="glass mx-auto mt-2 max-w-7xl rounded-2xl p-4 xl:hidden shadow-2xl"
          >
            <nav className="grid gap-1.5" aria-label="Mobile Navigation">
              {NAV.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    active(n.href)
                      ? "bg-brand/15 text-white font-semibold"
                      : "text-muted hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {n.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 grid grid-cols-2 gap-2.5 pt-3 border-t border-line/60">
              <a href={BILLING_URL} className="btn-ghost text-xs">
                Billing <ArrowUpRight size={14} />
              </a>
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs flex items-center justify-center gap-1.5"
              >
                <DiscordIcon className="h-3.5 w-3.5" />
                <span>Join Discord</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
