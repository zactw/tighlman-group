import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DeferredAppShowcase from "@/components/DeferredAppShowcase";
import DeferredPricing from "@/components/DeferredPricing";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Nav />
      <Hero />
      <DeferredAppShowcase />
      <Services />
      <HowItWorks />
      <DeferredPricing />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
