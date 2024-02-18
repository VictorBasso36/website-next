"use client"
import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Pagination, Virtual } from 'swiper/modules';
import { useEffect, useState } from "react";

export default function Depoimentos() {

  const projetosImobiliarios = [
    {
      name: 'Fabrício Henrique',
      edificioTitle: 'edifício Kyros',
      foto: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      name: 'Fabrício Henrique',
      edificioTitle: 'edifício Kyros',
      foto: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      name: 'Fabrício Henrique',
      edificioTitle: 'edifício Kyros',
      foto: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      name: 'Fabrício Henrique',
      edificioTitle: 'edifício Kyros',
      foto: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      name: 'Fabrício Henrique',
      edificioTitle: 'edifício Kyros',
      foto: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      name: 'Fabrício Henrique',
      edificioTitle: 'edifício Kyros',
      foto: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      name: 'Fabrício Henrique',
      edificioTitle: 'edifício Kyros',
      foto: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
  ];

  const fotosSwiperSlides = projetosImobiliarios.map((data, index) => (
    <SwiperSlide key={index} className={styles.SlideMain}>
        <div className={styles.cardCarrousel}>
          <div className={styles.HeaderCarrouselItems}> 
            <div className={styles.cardImage} style={{backgroundImage: `url(${data?.foto})`}}>
            
            </div>
            <div className={styles.mainTitle}>
              <p><strong>{data?.name}</strong></p>
              <p className={styles.mainDescription}>Sobre o <strong>{data?.edificioTitle}</strong></p>
            </div>
          </div>
          <div className={styles.cardText}>
              <p>“Eles (Villasul) me atenderam muito bem desde o começo, super atenciosos e cuidados... <br /><br />
                A qualidade da entrega do meu apartamento foi surreal, eu e minha esposa amamos tudo!"</p>
          </div>
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
