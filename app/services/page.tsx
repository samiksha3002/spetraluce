"use client";

import AboutHero from "../../components/AboutHero";
import Header from "../../components/Header";
import ServiceHero from "../../components/ServiceHero";
import ServicesSection from "../../components/ServicesSection";
import WorkWithSection from "../../components/WorkWithSection";
import Footer from "../../components/Footer";

export default function Page() {
  return (
    <main>
      <Header />
      <AboutHero title="" breadcrumb="" image="/ourservices.jpg" />
      <ServicesSection />
      <ServiceHero />
      <WorkWithSection />
      <Footer />
    </main>
  );
}
