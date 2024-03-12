"use client"
import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";
import ButtonMain from "../buttonMain";

export default function QuemSomos() {
  return (
    <section className={styles.main} id="InvestaConosco" >
      <div className={styles.mainContainer}>
        <h3>O que <strong>fazemos de <span>melhor</span></strong>:</h3>
        <p className={styles.quemSomosText}>
          Localizada em Sto. André, no coração do ABC Paulista, somos <br /> especialistas em construir lares, onde cada tijolo conta histórias <br /> de <strong>famílias realizadas</strong>. <br /><br />

          Escolher a Villasul é optar por uma parceria dedicada à concretização de sonhos. <br /><br />

          Nossa missão?<br />
          <strong>Ser a trilha que leva você à casa dos sonhos.</strong> 
        </p>
        <ButtonMain textstring="Conheça o VillaSul"   />

      </div>
    </section>
  );
}
