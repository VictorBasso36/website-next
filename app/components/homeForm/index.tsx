"use client"
import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";
import ButtonMain from "../buttonMain";

export default function HomeForm() {
  return (
    <section className={styles.main}>
      <div className={styles.mainContainer}>
        <form action="">
          <h4>
            Dê o próximo passo <br /> <strong>em direção ao seu sonho</strong>
          </h4>
          <div className={styles.formDiv}>
            <input type="text" placeholder="Nome" /> <input type="text" placeholder="Whatsapp" />
          </div>
          <input className={styles.inputemail} type="email" placeholder="Email" />
          <ButtonMain textstring="Enviar meu contato" url="/"  />
        </form>
      </div>
    </section>
  );
}
