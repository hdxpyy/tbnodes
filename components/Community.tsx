import { ArrowUpRight } from "lucide-react";
import { DISCORD_URL, SUPPORT_EMAIL, SUPPORT_MAILTO } from "@/config/site";
import { Section } from "./ui";
import Reveal from "./Reveal";
import { DiscordIcon, GmailIcon } from "./icons/BrandIcons";

// Community & Support Callout (authentic community hub, replacing unverified testimonials)
export default function Community() {
  return (
    <Section id="community">
      <Reveal>
        <div className="glass gborder mx-auto max-w-4xl rounded-3xl p-8 text-center sm:p-12">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl text-white">
            Have Questions Before Ordering?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-muted leading-relaxed">
            Join the TBNODES Discord community or send us an email. Our technical team is available 24/7 to help you choose the ideal Minecraft or VPS configuration.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3.5 sm:flex-row">
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2"
            >
              <DiscordIcon className="h-4 w-4" />
              <span>Join Discord</span>
              <ArrowUpRight size={15} />
            </a>
            <a
              href={SUPPORT_MAILTO}
              className="btn-ghost flex items-center justify-center gap-2"
            >
              <GmailIcon className="h-4 w-4" />
              <span>{SUPPORT_EMAIL}</span>
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
