import Hero from "@/components/Hero";
import InfraShowcase from "@/components/InfraShowcase";
import MinecraftPlans from "@/components/MinecraftPlans";
import VpsPlans from "@/components/VpsPlans";
import Features from "@/components/Features";
import NetworkSection from "@/components/NetworkSection";
import HowToPurchase from "@/components/HowToPurchase";
import WhyTB from "@/components/WhyTB";
import Community from "@/components/Community";
import Faq from "@/components/Faq";
import { ProductCatalogSchema, FaqSchema } from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <ProductCatalogSchema />
      <FaqSchema />
      <Hero />
      <InfraShowcase />
      <MinecraftPlans />
      <VpsPlans kind="intel" />
      <VpsPlans kind="ryzen" />
      <Features />
      <NetworkSection />
      <HowToPurchase />
      <WhyTB />
      <Community />
      <Faq />
    </>
  );
}
