// Centralized source of truth for brand, links, and business parameters
export const SITE = {
  name: "TBNODES",
  url: "https://www.tbnodes.com",
  canonicalUrl: "https://www.tbnodes.com",
  tagline: "POWERED FOR PERFORMANCE.",
  owner: "Frostyy",
  description:
    "TBNODES offers premium Minecraft server hosting and VPS hosting with powerful infrastructure, NVMe storage, transparent pricing and reliable customer support in India.",
  ogTitle: "TBNODES – Premium Minecraft & VPS Hosting",
  ogDescription:
    "Discover premium Minecraft and VPS hosting with TBNODES. Explore powerful server plans, fast storage, Indian infrastructure and performance-focused hosting.",
};

export const BILLING_URL = "https://billing.tbnodes.com";
export const DISCORD_URL = "https://discord.gg/66VWCGbe6V";
export const SUPPORT_EMAIL = "support@tbodes.com";
export const SUPPORT_MAILTO = `mailto:${SUPPORT_EMAIL}`;

// Exact requested background image from Wallhaven. Also cached locally at /bg.jpg.
export const BACKGROUND_URL = "https://w.wallhaven.cc/full/po/wallhaven-pomle9.jpg";

export const LOCATION = {
  city: "Delhi",
  country: "India",
  datacenter: "Delhi, India",
  lat: 28.6139,
  lon: 77.209,
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Minecraft Hosting", href: "/minecraft" },
  { label: "Intel VPS", href: "/vps/intel" },
  { label: "Ryzen VPS", href: "/vps/ryzen" },
  { label: "Features", href: "/features" },
  { label: "Network", href: "/network" },
  { label: "About", href: "/about" },
  { label: "Support", href: "/support" },
];

export const LEGAL = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Refund Policy", href: "/refund" },
];
