"use client"
import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Pagination, Virtual } from 'swiper/modules';
import { useEffect, useState } from "react";
import { url } from "inspector";

export default function Empreendimentos() {

  const projetosImobiliarios = [
    {
      type: "Edifício",
      slug: "Vivre-Résidence",
      titulo: "Vivre Résidence",
      size: "47m²",
      vagas: "1 Vaga",
      imovel: "Prédio",
      contrato: "Locação",
      img: "https://media.istockphoto.com/id/1411304340/pt/foto/two-modern-buildings-with-glass-windows-architecture-design-of-buildings-office-space-houses.jpg?s=612x612&w=0&k=20&c=qsYibygh6TlP__O9_6pnUPyXuA9rZ5Tiz6kggV6BxCE=",
      endereco: "Rua Lauro Muller, 335 - Sto. André"
    },
    {
      type: "Edifício",
      slug: "Vivre-Résidence",
      titulo: "Vivre Résidence",
      size: "47m²",
      vagas: "1 Vaga",
      imovel: "Prédio",
      contrato: "Locação",
      img: "https://media.istockphoto.com/id/1411304340/pt/foto/two-modern-buildings-with-glass-windows-architecture-design-of-buildings-office-space-houses.jpg?s=612x612&w=0&k=20&c=qsYibygh6TlP__O9_6pnUPyXuA9rZ5Tiz6kggV6BxCE=",
      endereco: "Rua Lauro Muller, 335 - Sto. André"
    },
    {
      type: "Edifício",
      slug: "Vivre-Résidence",
      titulo: "Vivre Résidence",
      size: "47m²",
      vagas: "1 Vaga",
      imovel: "Prédio",
      contrato: "Locação",
      img: "https://media.istockphoto.com/id/1411304340/pt/foto/two-modern-buildings-with-glass-windows-architecture-design-of-buildings-office-space-houses.jpg?s=612x612&w=0&k=20&c=qsYibygh6TlP__O9_6pnUPyXuA9rZ5Tiz6kggV6BxCE=",
      endereco: "Rua Lauro Muller, 335 - Sto. André"
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);


  const fotosSwiperSlides = projetosImobiliarios.map((data, index) => (
    <SwiperSlide key={index} className={styles.SlideMain} style={{height: activeSlide === index ? '520px' : '250px', marginTop: activeSlide === index ? '520px' : '650px',}}>
        <div className={styles.cardCarrousel}>
          <Link href={"/"}>
            <div className={styles.mainImageHere} style={{backgroundImage: `url(${data?.img})`}}>
              <p>{data?.type} <strong>{data?.titulo}</strong></p>
            </div>
          </Link>
          {/* se esse for o slide active definir height do DetailCascate como 0.1px */}
          <div className={styles.DetailCascate} style={{height: activeSlide === index ? '250px' : '0px'}}>
            <div className={styles.DetailsHere}>
                <div className={styles.IconHere}>
                  <div className={styles.divIcon}>
                    <p>{data?.size}</p>
                  </div>
                  <div className={styles.divIcon}>
                    <p>{data?.vagas}</p>
                  </div>
                  <div className={styles.divIcon}>
                    <p>{data?.imovel}</p>
                  </div>
                </div>
                <div className={styles.end}>
                  <p>{data?.endereco}</p>
                </div>
            </div>
            <div className={styles.borderDetail}></div>
            <p className={styles.contrato}><strong>{data?.contrato}</strong></p>
            <div className={styles.buttonHere}>
              <Link href="/">
                <button className={styles.mainButton}>
                  <p><strong>Eu quero!</strong></p>
                </button>
              </Link>
            </div>
          </div>
        </div>
    </SwiperSlide>
  ));

  return (
    <section className={styles.main}>
      <div className={styles.mainContainer}>
        <h2>Seu futuro <strong>te <span>espera:</span></strong></h2>
        <p className={styles.titleDescription}>Conheça unidades disponíveis para <strong>venda</strong> e <strong>locação.</strong></p>
        <Swiper
          spaceBetween={20}
          slidesPerView={"auto"}
          initialSlide={1}
          centeredSlides={true}
          loop={false}
          grabCursor={true}
          modules={[Autoplay, Virtual, Pagination]}
          pagination={false}
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
