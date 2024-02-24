"use client"
import Image from "next/image";
import styles from "./fotos.module.css";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Pagination, Virtual } from 'swiper/modules';
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
      <Image src={data?.url || ''} alt={data?.url || ''}></Image>
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
          spaceBetween={20}
          slidesPerView={"auto"}
          initialSlide={1}
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
      </div>
    </section>
  );
}
