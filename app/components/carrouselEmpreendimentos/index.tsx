"use client"
import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";

export default function Empreendimentos() {
  return (
    <section className={styles.main}>
      <div className={styles.mainContainer}>
        <h2>Seu futuro <strong>te <span>espera:</span></strong></h2>
        <p className={styles.titleDescription}>Conheça unidades disponíveis para <strong>venda</strong> e <strong>locação.</strong></p>
      </div>
    </section>
  );
}
