import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import MainBanner from "./components/homeBanner";
import Empreendimentos from "./components/carrouselEmpreendimentos";
import QuemSomos from "./components/quemSomos";
import HomeForm from "./components/homeForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <MainBanner />
        <Empreendimentos />
        <QuemSomos />
        <HomeForm />
      </main>
      <Footer/>
    </>
  );
}
