"use client"
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
import { useEffect, useState } from "react";
interface Foto {
  description?: string;
  url?: string;
}

interface Progresso {
  name?: string;
  percent?: string;
}

export interface PropsGet {
  type?: string;
  slug?: string;
  titulo?: string;
  size?: string;
  vagas?: string;
  imovel?: string;
  quartos?: number;
  contrato?: string;
  img?: string;
  description?: string;
  endereco?: string;
  enderecoMaps?: string;
  fotos?: Foto[];
  progresso?: Progresso[];
}
// async function getData(): Promise<PropsGet[]> {
//   const slugMetadata = await (await fetch('http://localhost:3000/api/Empreendimentos')).json();
//   if(!slugMetadata) return []
//   const data: PropsGet[] = slugMetadata;
//   return data;
// }


export default function Empreendimento({ params }: { params: { slug: string } }) {
  const [finalData, setFinalData] = useState<PropsGet[]>([]);
  const search = decodeURIComponent(params.slug || `&quot;`);

  // useEffect(() => {
  //   getData().then((data) => {
  //     setFinalData(data);
  //   });
  // }, []);

  const content = finalData.find((objeto: any) => objeto.slug === search.toString());
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
        {content?.titulo}
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
