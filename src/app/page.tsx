import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Approach />
        <WhyUs />
        <Services />
        {/* Testimonials hidden until real client quotes are ready to replace the placeholder art */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
