import Image from "next/image";
import styles from "../../page.module.css";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import MainBanner from "../../components/homeBanner";
import Empreendimentos from "../../components/carrouselEmpreendimentos";
import QuemSomos from "../../components/quemSomos";
import HomeForm from "../../components/homeForm";
import Depoimentos from "../../components/depoimentos";
import { url } from "inspector";
import ModalLead from "../../components/modalLead";

export default function Empreendimento({ params }: { params: { slug: string } }) {

  return (
    <>
    
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /><br /><br />
      <main className={styles.main}>
        {params?.slug.toString()}
        <br /><br /><br /><br /><br /><br />
        <Empreendimentos />
        <HomeForm />
      </main>
      <Footer/>
      <ModalLead />
    </>
  );
}
