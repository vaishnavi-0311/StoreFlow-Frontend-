import Navbar from "@/components/Home/Navbar";
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import Footer from "@/components/Home/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}