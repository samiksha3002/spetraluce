"use client";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";
import WelcomeSection from "../components/WelcomeSection";
import ChooseSpetraluce from "../components/ChooseSpetraluce";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSlider />
      <WelcomeSection
        title="Welcome to Spetraluce"
        description="Innovation & Excellence — Spetraluce is an Italian-based architectural lighting company that designs and manufactures premium lighting products. Our mission is to harness modern technology and old-world craftsmanship to produce innovative lighting solutions for residential, commercial, and hospitality spaces."
        imageSrc="/welcome2.jpg"
        features={[
          "Modern Lightings",
          "Innovation & Excellence",
          "Premium Lighting",
          "Domestic and Commercial",
        ]}
      />
      <ChooseSpetraluce />

      <Footer />
    </main>
  );
}
