"use client";

import Header from "../../components/Header";
import AboutHero from "../../components/AboutHero";
import ProductSection from "../../components/ProductSection";
import Footer from "../../components/Footer";
import ImageSlider from "../../components/ImageSlider";
export default function product() {
  return (
    <main>
      <Header />
      <AboutHero
        title="Our Products"
        breadcrumb="Products"
        image="/contact-bg.jpg"
      />
      <ProductSection />
      <ImageSlider />
      <Footer />
    </main>
  );
}
