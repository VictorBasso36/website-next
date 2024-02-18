import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import MainBanner from "./components/homeBanner";
import Empreendimentos from "./components/carrouselEmpreendimentos";
import QuemSomos from "./components/quemSomos";
import HomeForm from "./components/homeForm";
import Depoimentos from "./components/depoimentos";
import { url } from "inspector";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <MainBanner />
        <Empreendimentos />
        <QuemSomos />
        <div className={styles.quemSomosImage} style={{backgroundImage: 'url("/responsivoQuemSomos.png")' }} ></div>
        <Depoimentos />
        <HomeForm />
        <div className={styles.quemSomosImage} style={{backgroundImage: 'url("/responsivoForms.png")' }} ></div>
      </main>
      <Footer/>
    </>
  );
}
