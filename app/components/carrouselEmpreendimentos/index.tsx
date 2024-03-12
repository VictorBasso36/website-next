"use client"
import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination, Virtual } from 'swiper/modules';
import { useEffect, useState } from "react";
import { url } from "inspector";

export default function Empreendimentos() {

  const [larguraDaJanela, setLarguraDaJanela] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setLarguraDaJanela(window.innerWidth);
    };

    // Captura a largura da janela quando o componente é montado
    handleResize();

    // Adiciona um ouvinte de redimensionamento para atualizar a largura da janela quando ela muda
    window.addEventListener('resize', handleResize);

    // Remove o ouvinte de redimensionamento quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const projetosImobiliarios = [
    {
      type: "Edifício",
      slug: "Kyros",
      titulo: "Kyros",
      size: "47m²",
      vagas: "3 Vaga",
      imovel: "Prédio",
      contrato: "Locação",
      img: "https://3d1.com.br/assets/imagens/galerias/d134_fachada-predio-edificio-fatima-henrique-lado-maquete-3d.jpg",
      endereco: "Rua Lauro Muller, 335 - Sto. André"
    },
    {
      type: "Edifício",
      slug: "Vivre-Résidence",
      titulo: "Vivre Résidence",
      size: "72m²",
      vagas: "1 Vaga",
      imovel: "Prédio",
      contrato: "Locação",
      img: "https://media.istockphoto.com/id/1411304340/pt/foto/two-modern-buildings-with-glass-windows-architecture-design-of-buildings-office-space-houses.jpg?s=612x612&w=0&k=20&c=qsYibygh6TlP__O9_6pnUPyXuA9rZ5Tiz6kggV6BxCE=",
      endereco: "Rua Lauro Muller, 335 - Sto. André"
    },
    {
      type: "Edifício",
      slug: "Vila-Sul",
      titulo: "Vila Sul",
      size: "56m²",
      vagas: "6 Vaga",
      imovel: "Prédio",
      contrato: "Locação",
      img: "https://img.freepik.com/fotos-gratis/foto-de-um-predio-alto-e-alto_181624-2214.jpg",
      endereco: "Rua Muller, 335 - Sto. André"
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);


  const fotosSwiperSlides = projetosImobiliarios.map((data, index) => (
    <SwiperSlide key={index} className={styles.SlideMain} style={{height: activeSlide === index ? '540px' : '740px',  backgroundColor:  activeSlide === index ? '' : 'transparent'}}>
        <div className={styles.cardCarrousel}>
          <Link href={`/Empreendimento/${data?.slug}`} title={`Conheça o empreedimento imobilíario da VilaSul: ${data?.type} ${data?.titulo}`}>
            <div className={styles.mainImageHere} style={{backgroundImage: `url(${data?.img})`}}>
              <p>{data?.type} <strong>{data?.titulo}</strong></p>
            </div>
          </Link>
          {/* se esse for o slide active definir height do DetailCascate como 0.1px */}
          <div className={styles.DetailCascate} style={{height: activeSlide === index ? '250px' : '0px', opacity: activeSlide === index ? 1 : 0 }}>
            <div className={styles.DetailsHere}>
                <div className={styles.IconHere}>
                  <div className={styles.divIcon}>
                    <p><Image src="/size.svg" width={20} height={15} alt="Tamanho dos imoveis da Vila Sul"></Image>{data?.size}</p>
                  </div>
                  <div className={styles.divIcon}>
                    <p><Image src="/vagas.svg" width={20} height={15} alt="Numero de vagas dos imoveis da Vila Sul"></Image>{data?.vagas}</p>
                  </div>
                  <div className={styles.divIcon}>
                    <p><Image src="/imovel.svg" width={20} height={15} alt="Tipo de imoveis da Vila Sul"></Image>{data?.imovel}</p>
                  </div>
                </div>
                <div className={styles.end}>
                  <p>{data?.endereco}</p>
                </div>
            </div>
            <br />
            <div className={styles.borderDetail}>.</div>
 
            <p className={styles.contrato}><strong>{data?.contrato}</strong></p>
            <div className={styles.buttonHere}>
              <Link href={`/Empreendimento/${data?.slug}`} title={`Conheça o empreedimento imobilíario da VilaSul: ${data?.type} ${data?.titulo}`}>
                <button className={styles.mainButton}>
                  <p><strong>Eu quero!</strong></p>
                </button>
              </Link>
            </div>
          </div>
        </div>
    </SwiperSlide>
  ));
    console.log(larguraDaJanela)
  return (
    <section className={styles.main} id="Lancamentos">
      <div className={styles.mainContainer}>
        <h2>Seu futuro <strong>te <span>espera:</span></strong></h2>
        <p className={styles.titleDescription}>Conheça unidades disponíveis para <strong>venda</strong> e <strong>locação.</strong></p>
        <Swiper
          spaceBetween={0}
          slidesPerView={"auto"}
          initialSlide={1}
          centeredSlides={true}
          slideToClickedSlide={true}
          loop={false}
          grabCursor={true}
          modules={[Autoplay, Virtual, Pagination, Navigation]}
          pagination={false}
          navigation={true}
          autoplay={false}
          onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
          className={styles.swiperModal}
        >
          {fotosSwiperSlides}
        </Swiper>
        <br />
        <br />
      </div>
    </section>
  );
}
