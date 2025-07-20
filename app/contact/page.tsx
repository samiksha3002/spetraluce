"use client";

import Header from "../../components/Header";
import AboutHero from "../../components/AboutHero";
import OfficesSection from "../../components/OfficesSection";
import ContactFormSection from "../../components/ContactFormSection";
import Footer from "../../components/Footer";

export default function contact() {
  return (
    <main>
      <Header />
      <AboutHero
        title="Contact Us"
        breadcrumb="Contact"
        image="/contact-bg.jpg"
      />
      <OfficesSection />
      <ContactFormSection />

      <Footer />
    </main>
  );
}
