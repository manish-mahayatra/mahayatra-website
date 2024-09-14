import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HomePage/HeroSection";
import Trending from "./components/HomePage/Trending";
import Monthly from "./components/HomePage/Monthly";
import Weekent from "./components/HomePage/Weekent";
import About from "./components/HomePage/About";
import Contact from "./components/HomePage/Contact";
import Testimonial from "./components/HomePage/Testimonial";
import TravelGuide from "./components/HomePage/TravelGuide";
import Footer from "./components/Footer";
import Adventures from "./components/HomePage/Adventures";

export default function Home() {
  return (
    <>
      <section className="h-screen shadow-custom-inset" id="home">
        <HeroSection />
      </section>

      <Trending />
      <Monthly />
      <Weekent />
      <About />
      <Adventures />
      <TravelGuide />
      <Testimonial />
      <Footer />
    </>
  );
}
