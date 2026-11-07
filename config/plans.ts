import { BILLING_URL } from "./site";

// All plans and prices live here.
// Every plan defaults to centralized BILLING_URL (https://billing.tbnodes.com)
export type McPlan = {
  id: string;
  name: string;
  ram: string;
  cpu: string;
  storage: string;
  backups: number;
  price: number;
  accent: string;
  icon: string;
  badge?: string;
  orderUrl?: string;
};

const mc = (
  name: string,
  ram: number,
  cpu: number,
  storage: number,
  backups: number,
  price: number,
  accent: string,
  icon: string,
  badge?: string
): McPlan => ({
  id: name.toLowerCase(),
  name,
  ram: `${ram}GB DDR4`,
  cpu: `${cpu.toFixed(1)} vCore`,
  storage: `${storage}GB NVMe SSD`,
  backups,
  price,
  accent,
  icon,
  badge,
  orderUrl: BILLING_URL,
});

export const MC_TIERS = [
  {
    id: "basic",
    label: "BASIC TIER — INTEL XEON",
    description:
      "High-value Minecraft hosting powered by Intel Xeon multi-core CPUs, Enterprise DDR4 RAM, and NVMe SSD storage.",
    designedFor: [
      "Survival SMPs",
      "Creative Worlds",
      "Lifesteal SMP",
      "Plugin Testing",
      "Small & Medium Communities",
    ],
    plans: [
      mc("Dirt", 2, 1.0, 6, 2, 20, "#84cc16", "dirt"),
      mc("Stone", 6, 1.5, 15, 3, 60, "#94a3b8", "stone"),
      mc("Copper", 8, 2.0, 20, 4, 80, "#f97316", "copper"),
      mc("Iron", 10, 2.5, 25, 5, 100, "#e2e8f0", "iron"),
      mc("Gold", 12, 3.0, 30, 6, 120, "#eab308", "gold"),
      mc("Emerald", 16, 3.5, 40, 7, 160, "#10b981", "emerald"),
      mc("Diamond", 24, 4.0, 50, 8, 240, "#06b6d4", "diamond"),
      mc("Netherite", 32, 5.0, 60, 10, 320, "#64748b", "netherite"),
    ],
  },
  {
    id: "ultimate",
    label: "ULTIMATE TIER — HIGH PERFORMANCE",
    description:
      "High-capacity Minecraft hosting designed for larger communities, modded servers, advanced SMPs, and demanding gaming environments.",
    designedFor: [
      "Heavy Modpacks",
      "Large SMP Networks",
      "High Player Count",
      "Custom Plugin Suites",
      "Enterprise Minecraft Hosting",
    ],
    plans: [
      mc("Zombie", 40, 6.0, 70, 13, 400, "#84cc16", "zombie"),
      mc("Skeleton", 48, 7.0, 90, 15, 480, "#cbd5e1", "skeleton"),
      mc("Creeper", 64, 8.0, 120, 20, 640, "#22c55e", "creeper"),
      mc("Enderman", 80, 9.0, 150, 25, 800, "#c084fc", "enderman"),
      mc("Wither", 96, 10.0, 180, 30, 960, "#38bdf8", "wither"),
      // IMPORTANT: Keep Warden storage at supplied 6GB value; flagged for owner verification before launch
      mc(
        "Warden",
        128,
        11.0,
        6,
        25,
        1280,
        "#00d9ff",
        "warden",
        "Owner Verification: 6GB NVMe"
      ),
    ],
  },
];

export type VpsPlan = {
  id: string;
  name: string;
  ram: string;
  cpu: string;
  storage: string;
  price: number;
  icon: string;
  orderUrl?: string;
};

const vps = (
  name: string,
  ram: string,
  cpu: string,
  storage: string,
  price: number,
  icon: string
): VpsPlan => ({
  id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  name,
  ram,
  cpu,
  storage,
  price,
  icon,
  orderUrl: BILLING_URL,
});

export const VPS = {
  intel: {
    title: "INTEL PLATINUM VPS",
    eyebrow: "Intel VPS Hosting",
    hardware: "Intel Xeon Platinum 8269-CY",
    description:
      "Enterprise-grade VPS powered by Intel Xeon Platinum 8269-CY processors with high-speed NVMe storage in Delhi, India.",
    accent: "#087BFF",
    highlights: [
      "Delhi, India",
      "1 Dedicated IPv4",
      "Unmetered bandwidth",
      "2Gbps network speed",
      "99.9% uptime target",
      "24/7 support",
    ],
    plans: [
      vps("CORE - 4", "4GB DDR4", "1 vCore", "30GB NVMe", 150, "blaze"),
      vps("BOOST - 8", "8GB DDR4", "2 vCores", "50GB NVMe", 300, "spider"),
      vps("PRIME - 16", "16GB DDR4", "4 vCores", "80GB NVMe", 650, "pillager"),
      vps("PRO - 32", "32GB DDR4", "8 vCores", "120GB NVMe", 1350, "evoker"),
      vps("ELITE - 48", "48GB DDR4", "10 vCores", "150GB NVMe", 1700, "ravager"),
      vps("ULTIMATE - 64", "64GB DDR4", "12 vCores", "200GB NVMe", 2100, "enderdragon"),
    ],
  },
  ryzen: {
    title: "AMD RYZEN VPS",
    eyebrow: "Ryzen VPS Hosting",
    hardware: "AMD Ryzen 9 9950X",
    description:
      "Ultra-high single-core clock speeds with AMD Ryzen 9 9950X processors, Cloudflare Magic Transit DDoS protection, and NVMe SSDs in Delhi, India.",
    accent: "#00D9FF",
    highlights: [
      "Delhi, India",
      "Cloudflare Magic Transit + DDoS protection",
      "High-speed NVMe SSD",
      "Full root access",
      "Instant setup target",
      "Proxmox / Ubuntu / Debian options",
    ],
    plans: [
      vps("RYZEN NANO", "4GB", "1 vCore", "30GB NVMe", 400, "shulker"),
      vps("RYZEN PULSE", "8GB", "2 vCores", "50GB NVMe", 800, "allay"),
      vps("RYZEN VOLT", "16GB", "4 vCores", "70GB NVMe", 1500, "breeze"),
      vps("RYZEN SURGE", "24GB", "4 vCores", "100GB NVMe", 2000, "strider"),
      vps("RYZEN APEX", "32GB", "6 vCores", "128GB NVMe", 3200, "vex"),
      vps("RYZEN TITAN", "48GB", "8 vCores", "190GB NVMe", 4500, "magmacube"),
      vps("RYZEN PRIME", "64GB", "10 vCores", "200GB NVMe", 6500, "elderguardian"),
    ],
  },
};
