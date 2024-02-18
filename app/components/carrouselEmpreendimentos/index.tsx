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
    }
  ];

  const fotosSwiperSlides = projetosImobiliarios.map((data, index) => (
    <SwiperSlide key={index} className={styles.SlideMain}>
        <div className={styles.cardCarrousel}>
          <div className={styles.mainImageHere}>
            <p>{data?.type} <strong>{data?.titulo}</strong></p>
          </div>
          <div className={styles.DetailsHere}>
              <div style={{backgroundImage: `url('${data?.img}')`}}>

              </div>
              <div>
                <p>{data?.endereco}</p>
              </div>
          </div>
          <p><strong>{data?.contrato}</strong></p>
          <Link href="/">
            <button>
              <p><strong>Eu quero!</strong></p>
            </button>
          </Link>
        </div>
    </SwiperSlide>
  ));

  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className:string) {
      return '<span class="' + className + '">' + '</span>';
    },
  };

  return (
    <section className={styles.main}>
      <div className={styles.mainContainer}>
        <h2>Seu futuro <strong>te <span>espera:</span></strong></h2>
        <p className={styles.titleDescription}>Conheça unidades disponíveis para <strong>venda</strong> e <strong>locação.</strong></p>
        <Swiper
          spaceBetween={20}
          slidesPerView={"auto"}
          initialSlide={3}
          centeredSlides={true}
          loop={false}
          grabCursor={true}
          modules={[Autoplay, Virtual, Pagination]}
          pagination={pagination}
          autoplay={false}
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
