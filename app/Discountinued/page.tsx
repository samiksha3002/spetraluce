import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AboutHero from "../../components/AboutHero";
import Discontinuedpage from "../../components/Discontinuedpage";

export default function page() {
  return (
    <main>
      <Header />
      <AboutHero
        title="Discountinued Products A-Z"
        breadcrumb=" Discoutinued Products A-Z"
        image="/bond.jpg"
      />
      <Discontinuedpage />

      <Footer />
    </main>
  );
}
