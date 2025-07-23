"use client";

import Header from "../../components/Header";
import AboutHero from "../../components/AboutHero";
import ProductSection from "../../components/ProductSection";
import ImageSlider from "../../components/ImageSlider";
import Footer from "../../components/Footer";

export default function ProductPage() {
  return (
    <main>
      <Header />
      <AboutHero
        title="Our Products"
        breadcrumb="Products"
        image="/club4.jpg"
      />
      <ProductSection />
      <ImageSlider />
      <Footer />
    </main>
  );
}
