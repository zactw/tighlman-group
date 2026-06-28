import dynamic from "next/dynamic";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// AppShowcase + Pricing are the heaviest interactive sections.
// Defer their JS so the first paint and hamburger work fast on mobile.
const AppShowcase = dynamic(() => import("@/components/AppShowcase"), {
  loading: () => <div className="min-h-[600px]" />,
});
const Pricing = dynamic(() => import("@/components/Pricing"), {
  loading: () => <div className="min-h-[800px]" />,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Nav />
      <Hero />
      <AppShowcase />
      <Services />
      <HowItWorks />
      <Pricing />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
