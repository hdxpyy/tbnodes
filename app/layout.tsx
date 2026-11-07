import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SITE } from "@/config/site";
import Background from "@/components/Background";
import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { OrganizationSchema, WebSiteSchema } from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });

const DEFAULT_TITLE = "TBNODES – Premium Minecraft Server Hosting & Game Server Hosting India";
const DEFAULT_DESCRIPTION =
  "Explore premium Minecraft server hosting and VPS hosting with TBNODES. Powerful infrastructure, NVMe storage, DDoS protection, transparent plans and reliable support in India.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE.name}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "Minecraft Server Hosting",
    "Game Server Hosting",
    "Minecraft Hosting India",
    "TBNODES",
    "TB NODES",
    "TBNODES Minecraft Hosting",
    "Premium Minecraft Hosting",
    "Minecraft Server Hosting India",
    "Best Minecraft Server Hosting",
    "Cheap Minecraft Server Hosting",
    "Minecraft SMP Hosting",
    "Lifesteal Minecraft Hosting",
    "Survival Minecraft Hosting",
    "Modded Minecraft Server Hosting",
    "Minecraft Java Hosting",
    "Minecraft Bedrock Hosting",
    "NVMe Minecraft Hosting",
    "DDoS Protected Minecraft Hosting",
    "Intel Xeon Hosting",
    "AMD Ryzen VPS Hosting",
    "VPS Hosting India",
    "TB Cloud",
    "TB Cloudes",
  ],
  authors: [{ name: SITE.owner, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE.ogTitle,
    description: SITE.ogDescription,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "TBNODES Official 3D Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: SITE.ogTitle,
    description: SITE.ogDescription,
    images: ["/logo.png"],
    creator: "@tbnodes",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#03050A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <head>
        <OrganizationSchema />
        <WebSiteSchema />
      </head>
      <body className="bg-ink text-white antialiased selection:bg-brand selection:text-white">
        <Background />
        <CursorGlow />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
