"use client"
import Image from "next/image";
import styles from "./fotos.module.css";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Virtual, Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

interface Foto {
    description?: string;
    url?: string;
  }
interface FotosProps {
    data: Foto[];
}

export default function Fotos({data}: FotosProps) {
  if(data.length < 0) return null
  const fotosSwiperSlides = data?.map((data, index) => (
    <SwiperSlide key={index} className={styles.SlideMain}>
      <Image className={styles.shadown} src={data?.url || ''} alt={data?.description || ''} width={1200} height={700} ></Image>
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
        <h2>Fotos do <strong>Empreendimento:</strong></h2>
        <Swiper
          spaceBetween={0}
          slidesPerView={"auto"}
          initialSlide={1}
          centeredSlides={true}
          loop={false}
          grabCursor={true}
          modules={[Autoplay, Virtual, Pagination, Navigation]}
          pagination={pagination}
          autoplay={false}
          navigation={{
            enabled: true,
            nextEl: '.my-custom-next-button',
            prevEl: '.my-custom-prev-button',
          }}
          className={styles.swiperModal}
        >
          {fotosSwiperSlides}
        </Swiper>
        <Image className="my-custom-prev-button" alt="Veja as imagens !" src="/arrow.svg" width={20} height={20}></Image>
        <Image className="my-custom-next-button" alt="Veja as imagens !" src="/arrow.svg" width={20} height={20}></Image>
   
      </div>
    </section>
  );
}
