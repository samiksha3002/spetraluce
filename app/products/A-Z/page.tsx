// app/products/page.jsx (if using App Router)

import Image from "next/image";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import AboutHero from "../../../components/AboutHero";
import Aproductmain from "../../../components/Aproductmain";
export default function Page() {
  return (
    <main>
      <Header />
      <AboutHero
        title="Spetraluce Products A-Z"
        breadcrumb="Products A-Z"
        image="/bond.jpg"
      />
      <Aproductmain />
      <Footer />
    </main>
  );
}
