"use client";

import AboutHero from "../../components/AboutHero";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ImageGrid from "../../components/ImageGrid";

export default function GalleryPage() {
  return (
    <main>
      <Header />
      <AboutHero title="Gallery" breadcrumb="Gallery" image="/Gall1.jpg" />
      <ImageGrid />
      <Footer />
    </main>
  );
}
