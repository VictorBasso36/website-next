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
      name: 'Luciana Arquiteta',
      edificioTitle: 'edifício Bahia',
      foto: 'https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg'
    },
    {
      name: 'Fabrício Henrique',
      edificioTitle: 'edifício Kyros',
      foto: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      name: 'Marcio Henrique',
      edificioTitle: 'edifício VilaSul',
      foto: 'https://media.istockphoto.com/id/1388644810/pt/foto/happy-caucasian-young-man-using-smart-phone-cellphone-for-calls-social-media-mobile.jpg?s=612x612&w=0&k=20&c=vUKIqJI8fLlbjdSF5njbeQs_dye1CjAZ_B7LcgPouzQ='
    },
    {
      name: 'Cadu Henrique',
      edificioTitle: 'edifício Kyros',
      foto: 'data:image/jpeg;base64,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'
    },
    {
      name: 'Marcia Henrique',
      edificioTitle: 'edifício Tatuapé',
      foto: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      name: 'Fabrício Henrique',
      edificioTitle: 'edifício Vila Lobos',
      foto: 'https://thumbs.dreamstime.com/b/cumprimento-feliz-da-jovem-mulher-com-namasthe-41149475.jpg'
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
                A qualidade da entrega do meu apartamento foi surreal, eu e minha esposa amamos tudo!“</p>
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
