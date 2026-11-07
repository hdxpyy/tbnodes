import { BILLING_URL, DISCORD_URL, SUPPORT_EMAIL } from "./site";

export type Faq = {
  q: string;
  a: string;
  links?: { label: string; href: string }[];
};

const billing = { label: "Open Billing Portal", href: BILLING_URL };
const discord = { label: "Join Discord", href: DISCORD_URL };

export const FAQS: Faq[] = [
  {
    q: "What is TBNODES?",
    a: "TBNODES is a premium game and cloud hosting provider founded by Frostyy, delivering high-performance Minecraft server hosting, Intel Xeon Platinum VPS hosting, and AMD Ryzen 9 9950X VPS hosting powered by enterprise hardware located in Delhi, India.",
  },
  {
    q: "What types of hosting does TBNODES provide?",
    a: "TBNODES specializes in four core hosting categories: Minecraft Server Hosting (Basic Intel Xeon Tier and Ultimate High-Performance Tier), Intel Platinum VPS Hosting (Intel Xeon Platinum 8269-CY), AMD Ryzen VPS Hosting (AMD Ryzen 9 9950X with Cloudflare Magic Transit DDoS protection), and Game Server Hosting.",
  },
  {
    q: "How can I purchase Minecraft hosting?",
    a: "To purchase Minecraft hosting, navigate to our Minecraft Hosting section or page, choose your preferred tier (from Dirt 2GB up to Warden 128GB), and click 'Order Now'. You will be smoothly redirected to our official billing portal at billing.tbnodes.com to complete your order.",
    links: [billing],
  },
  {
    q: "How can I purchase a VPS?",
    a: "Select your desired VPS category (Intel Platinum or AMD Ryzen), review the RAM, vCore, and NVMe specifications, and click 'Order Now'. Your purchase and deployment configuration are processed directly through our secure billing portal at billing.tbnodes.com.",
    links: [billing],
  },
  {
    q: "Where are your servers located?",
    a: "All TBNODES server infrastructure is physically deployed in Delhi, India. This strategic location provides ultra-low latency, optimal routing, and consistent ping for gamers and developers throughout India and South Asia.",
  },
  {
    q: "Which Minecraft versions are supported?",
    a: "TBNODES supports all modern and legacy Minecraft editions, including Java Edition, Bedrock Edition, Paper, Purpur, Spigot, Fabric, and Forge. If you require assistance setting up a specific version or modpack, our 24/7 technical team is available in Discord.",
    links: [discord],
  },
  {
    q: "Can I install Minecraft plugins and mods?",
    a: "Yes. All TBNODES Minecraft plans support custom plugins, modpacks, datapacks, and custom server JARs. Our Ultimate Tier (Zombie to Warden) is specifically engineered with heavy RAM allowances and multi-core processing to handle demanding modpacks and large SMP networks.",
    links: [discord],
  },
  {
    q: "Do Minecraft plans include backups?",
    a: "Yes. Every TBNODES Minecraft hosting plan includes dedicated automated backups, starting from 2 backups on the Dirt plan up to 30 backups on higher tiers. Every plan also includes an extra server port and MySQL database at no extra cost.",
  },
  {
    q: "What is NVMe SSD storage?",
    a: "NVMe (Non-Volatile Memory Express) is an ultra-fast storage protocol designed for high-throughput solid-state drives. Compared to traditional SATA SSDs or mechanical hard drives, NVMe offers up to 6x faster read/write speeds, resulting in instant chunk loading, rapid world generation, and zero IOPS bottlenecks.",
  },
  {
    q: "Do VPS plans include root access?",
    a: "Yes. Every TBNODES VPS plan—both Intel Platinum and AMD Ryzen—comes with full root access, giving you administrative privileges to configure operating system kernels, deploy custom software, configure firewalls, and manage environments.",
  },
  {
    q: "Which operating systems are supported?",
    a: "Our VPS plans provide instant OS templates including Ubuntu LTS, Debian, and Proxmox VE virtualization environments. Custom ISOs and additional Linux distributions can also be deployed upon request through our technical support.",
    links: [discord],
  },
  {
    q: "How do I contact technical support?",
    a: `You can contact our 24/7 technical support team through our official Discord community at discord.gg/66VWCGbe6V or by emailing ${SUPPORT_EMAIL}. Our team is ready around the clock to help with hardware, networking, and server inquiries.`,
    links: [discord],
  },
  {
    q: "Where can I manage my billing?",
    a: "All customer billing, invoices, subscription management, payment receipts, and plan upgrades are handled centrally through the official TBNODES billing portal at https://billing.tbnodes.com.",
    links: [billing],
  },
];
