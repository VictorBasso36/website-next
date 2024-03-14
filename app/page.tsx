"use client"
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
import ModalLead from "./components/modalLead";
import { useEffect, useState } from "react";
import Status from "./Empreendimento/[slug]/components/status";
import Fotos from "./Empreendimento/[slug]/components/fotos";

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
  simpleName?: number;
  contrato?: string;
  img?: string;
  description?: string;
  endereco?: string;
  enderecoMaps?: string;
  fotos?: Foto[];
  progresso?: Progresso[];
}

async function getData(): Promise<PropsGet[]> {
  const slugMetadata = await (await fetch('https://vilasul.vercel.app/api/Empreendimentos')).json();
  if(!slugMetadata) return []
  const data: PropsGet[] = slugMetadata;
  return data;
}

export default function Home() {
  const [finalData, setFinalData] = useState<PropsGet[]>([]);
  const search = 'Vila-Sul';

  useEffect(() => {
    getData().then((data) => {
      setFinalData(data);
    });
  }, []);

  const content = finalData.find((objeto: any) => objeto.slug === search.toString());
  if(!content) return null
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        
        
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div className={styles.quemSomosImage} style={{backgroundImage: 'url("/responsivoForms.png")' }} ></div>
          
          <div className={styles.gradientHere}>
            <br /><br /><br /><br />
            <iframe className={styles.mainIframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117440.17846930564!2d-46.81427562007078!3d-23.096891679726948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceda1245a3cd57%3A0x506aea31895b681d!2sJarinu%20-%20Aglomera%C3%A7%C3%A3o%20Urbana%20de%20Jundia%C3%AD%2C%20Jarinu%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1710377068035!5m2!1spt-BR!2sbr" style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            {
              content?.fotos && <Fotos data={content?.fotos} />
            }
            {
              content?.progresso && <Status data={content?.progresso} key={1}/>
            }
            <br />
            <br />
            <br />
            <br />
            <br />
            <HomeForm />
          </div>
        
      </main>
      <Footer/>
      <ModalLead />
    </>
  );
}
