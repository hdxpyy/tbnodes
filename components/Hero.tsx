import Image from "next/image";
import { ArrowUpRight, Cpu, HardDrive, MapPin } from "lucide-react";
import { DISCORD_URL } from "@/config/site";
import SceneFrame from "./three/SceneFrame";
import Reveal from "./Reveal";
import { DiscordIcon } from "./icons/BrandIcons";

export function LogoFallback() {
  return (
    <div className="relative grid h-full w-full place-items-center">
      <div className="absolute h-3/4 w-3/4 rounded-full bg-[radial-gradient(circle,rgba(8,123,255,.45),transparent_65%)] blur-2xl" />
      <Image
        src="/logo.png"
        alt="TBNODES official 3D logo"
        width={512}
        height={512}
        priority
        sizes="(max-width: 1024px) 70vw, 420px"
        className="animate-float relative h-auto w-[72%] max-w-[420px] drop-shadow-[0_0_55px_rgba(8,123,255,.65)]"
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pb-16 pt-28">
      {/* Cinematic Lighting & Atmospheric FX */}
      <div className="beam beam-a" aria-hidden />
      <div className="beam beam-b" aria-hidden />
      <div className="waves" aria-hidden />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-2">
        <div className="relative z-10 text-center lg:text-left">
          {/* Brand Tagline */}
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-ice uppercase">
              <span>POWERED FOR PERFORMANCE.</span>
            </div>
          </Reveal>

          {/* Official Required H1 & H2 Headings (Visible HTML Text) */}
          <Reveal delay={0.08}>
            <h1 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              TBNODES Minecraft Server Hosting
            </h1>
            <h2 className="mt-2 text-xs sm:text-sm font-medium text-ice/90 leading-snug max-w-xl">
              TBNODES offers premium Minecraft and VPS hosting with powerful infrastructure, NVMe storage, transparent pricing and reliable customer support.
            </h2>
          </Reveal>

          {/* Cinematic Hero Headline */}
          <Reveal delay={0.16}>
            <div className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
              <span className="block">YOUR WORLD.</span>
              <span className="block">YOUR SERVER.</span>
              <span className="text-grad block">ZERO LIMITS.</span>
            </div>
          </Reveal>

          {/* Supporting Copy */}
          <Reveal delay={0.24}>
            <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-muted lg:mx-0 leading-relaxed">
              Experience next-generation Minecraft and VPS hosting with powerful hardware, high-speed NVMe storage, reliable infrastructure, and performance-focused technology.
            </p>
          </Reveal>

          {/* Action CTAs */}
          <Reveal delay={0.32}>
            <div className="mt-8 flex flex-col justify-center gap-3.5 sm:flex-row lg:justify-start">
              <a href="#minecraft-plans" className="btn-primary">
                Explore Hosting Plans
              </a>
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost flex items-center gap-2"
              >
                <DiscordIcon className="h-4 w-4 text-[#5865F2]" />
                <span>Join Our Discord</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </Reveal>

          {/* Feature Highlights */}
          <Reveal delay={0.4}>
            <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-muted lg:justify-start">
              <li className="flex items-center gap-2">
                <HardDrive size={15} className="text-neon" />
                <span>High-Speed NVMe Storage</span>
              </li>
              <li className="flex items-center gap-2">
                <Cpu size={15} className="text-neon" />
                <span>Intel Xeon &amp; AMD Ryzen 9</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={15} className="text-neon" />
                <span>Delhi, India Infrastructure</span>
              </li>
            </ul>
          </Reveal>
        </div>

        {/* 3D Floating TBNODES Logo Visual */}
        <div className="animate-logo-in relative z-0 h-[340px] sm:h-[440px] lg:h-[580px]">
          <SceneFrame
            scene="hero"
            label="Floating 3D TBNODES logo"
            fallback={<LogoFallback />}
            className="absolute inset-0"
          />
        </div>
      </div>
    </section>
  );
}
