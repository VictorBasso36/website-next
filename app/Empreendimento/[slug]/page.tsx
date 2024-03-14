"use client"
import Image from "next/image";
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
import Status from "./components/status";
import Fotos from "./components/fotos";
import styles from "./page.module.css"
import ButtonMain from "@/app/components/buttonMain";
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


export default function Empreendimento({ params }: { params: { slug: string } }) {
  const [finalData, setFinalData] = useState<PropsGet[]>([]);
  const search = decodeURIComponent(params.slug || `&quot;`);

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
        <div className={styles.gradientHereMain}>
          <div className={styles.mainBgTitle}>
            <div className={styles.mainContainer}>
              <h1>{content?.type} <br /><strong>{content?.titulo}:</strong></h1>
            </div>
          </div>
          <div className={styles.maininfo}>
            <div className={styles.maininfoContainer}>
              <div className={styles.cardInfo}>
                <div className={styles.infosCardHere}>
                  <div className={styles.infoIconsHere}>
                    {content?.size && <><p><Image src="/size.svg" width={20} height={15} alt="Tamanho dos imoveis da Vila Sul"></Image>{`${content?.size}`}</p></>}
                    {content?.vagas && <><p><Image src="/vagas.svg" width={20} height={15} alt="Numero de vagas dos imoveis da Vila Sul"></Image>{`${content?.vagas}`}</p></>}
                    {content?.imovel && <><p><Image src="/imovel.svg" width={20} height={15} alt="Tipo de imoveis da Vila Sul"></Image>{`${content?.imovel}`}</p></>}
                    {content?.quartos && <><p><Image src="/rooms.svg" width={20} height={15} alt="quantidade de quartos imoveis da Vila Sul"></Image>{`${content?.quartos} quarto(s)`}</p></>}
                    {content?.simpleName && <><p><Image src="/location.svg" width={20} height={15} alt="Localização dos imoveis da Vila Sul"></Image>{`${content?.simpleName}`}</p></>}
                  </div>
                  <div className={styles.borderDetail}></div>
                  <div className={styles.TextHere}>
                    <p className={styles.description}><strong>{content?.endereco}</strong></p>
                    <pre className={styles.textContent} dangerouslySetInnerHTML={{ __html: content?.description || '' }}>
                  
                    </pre>
                  </div>
                </div>
                <ButtonMain textstring="Conheça o Empreendimento"  />
              </div>
              {content?.fotos &&
              <Image className={styles.mainImage} src="/foto-de-um-predio-alto-e-alto_181624-2214.avif" alt={content?.fotos[0]?.description ? content?.fotos[0]?.description : ''} width={500} height={700} />}
            </div>
          </div>
        </div>

        {
          content?.enderecoMaps &&
          <iframe className={styles.mainIframe} src={content?.enderecoMaps} width="600" height="450" allowFullScreen={true} loading="lazy" referrerPolicy={"no-referrer-when-downgrade"}></iframe>
        }
        <div className={styles.gradientHere}>
          <br />
          <br />
          <br />
          <br />
          {
            content?.fotos && <Fotos data={content?.fotos} />
          }
          <br />
          <br />
          <br />
          <br />
          {
            content?.progresso && <Status data={content?.progresso} key={1}/>
          }
          <br />
          <br />

        </div>
        <HomeForm />
        <div className={styles.quemSomosImage} style={{backgroundImage: 'url("/responsivoForms.png")' }} ></div>
      </main>
      <Footer/>
      <ModalLead />
    </>
  );
}
