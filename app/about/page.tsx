"use client";

import Header from "../../components/Header";
import AboutHero from "../../components/AboutHero";
import WelcomeSection from "../../components/WelcomeSection";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <main>
      <Header />
      <AboutHero title="About Us" breadcrumb="About" image="/contact-bg.jpg" />
      <WelcomeSection
        title="Spetraluce makes your space illuminate life!"
        description="Spetraluce is a Italian based architectural lighting company that designs and manufactures premium lighting products. Our mission is to harness modern technology and old world craftsmanship to produce innovative lighting solutions for residential, commercial and hospitality spaces."
        imageSrc="/pop3.jpg"
        features={[
          "Modern Lightings",
          "Innovation & Excellence",
          "Premium Lighting",
          "Domestic and Commercial",
        ]}
      />

      <AboutHero />
      <Footer />
    </main>
  );
}
