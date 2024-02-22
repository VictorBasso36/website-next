"use client"
import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";
import ButtonMain from "../buttonMain";

export default function MainBanner() {
  return (
    <section className={styles.main} style={{marginTop: "160px"}}>
        <div className={styles.mainContainer}>
            <h1>Há mais de <strong>35 anos</strong><br />
            <span>concretizando sonhos</span></h1>
            <ButtonMain textstring="Quero realizar meu sonho!"  />
            <a href="/">
              <p className={styles.TelBanner}><strong>Telefone </strong><span>&nbsp;(11) 4994-0522</span></p>
            </a>
        </div>
    </section>
  );
}
