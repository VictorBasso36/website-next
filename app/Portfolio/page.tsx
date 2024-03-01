import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MainBanner from "../components/homeBanner";
import Empreendimentos from "../components/carrouselEmpreendimentos";
import QuemSomos from "../components/quemSomos";
import HomeForm from "../components/homeForm";
import Depoimentos from "../components/depoimentos";
import { url } from "inspector";
import ModalLead from "../components/modalLead";
import BannerOtherPage from "../components/bannerOtherPage";
import PorfolioItems from "./components/paginetedPortfolio";

export default function Porfolio() {

  return (
    <>
      <Navbar />
      <main className={styles.main}>

        <BannerOtherPage />
        <PorfolioItems />
        <div className={styles.quemSomosImage} style={{backgroundImage: 'url("/responsivoForms.png")' }} ></div>
        <HomeForm />
      </main>
      <Footer/>
      <ModalLead />
    </>
  );
}
