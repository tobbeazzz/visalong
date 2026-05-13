import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import Booking from "@/components/Booking";
import Team from "@/components/Team";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <Marquee />
        <Philosophy />
        <Services />
        <Booking />
        <Team />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
