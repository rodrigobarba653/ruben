import Hero from "@/components/Hero";
import Composer from "@/components/Composer";
import SoundDesign from "@/components/SoundDesign";
import Discography from "@/components/Discography";
import Credits from "@/components/Credits";
import About from "@/components/About";
import Awards from "@/components/Awards";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Composer />
      <SoundDesign />
      <Discography />
      <Credits />
      <About />
      <Awards />
      <ContactForm />
      <Footer />
    </>
  );
}
