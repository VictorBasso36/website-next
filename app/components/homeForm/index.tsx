"use client"
import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";
import ButtonMain from "../buttonMain";

export default function HomeForm() {
  return (
    <section className={styles.main} id="Contato">
      <div className={styles.mainContainer}>
        <form action="">
          <h4>
            Dê o próximo passo <br /> <strong>em direção ao seu sonho</strong>
          </h4>
          <div className={styles.formDiv}>
            <input type="text" placeholder="Nome" /> <input type="text" placeholder="Whatsapp" />
          </div>
          <input className={styles.inputemail} type="email" placeholder="Email" />
          <button className={styles.mainButton} style={{cursor: "pointer"}}>
            <div className={styles.texthere}>
              <p><strong>Enviar meu contato</strong></p>
            </div>
            <div className={styles.DetailMain}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="11"
                height="18"
                viewBox="0 0 11 18"
              >
                <image
                  width="11"
                  height="18"
                  data-name="Camada 31 copiar 4"
                  xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAASCAYAAACNdSR1AAAAwklEQVQokXWSOQoCQRBFv/tyG48irswhvImJu4mIgafwHKbmgoE6Dhg9aXDQKaoLqqNXy//VJaAqaSqpKWki6a1YADN+sQDKgLwMT0YxtkA9BidAagqWQMWDQ46cCSug5sEhB8DTFKz/C+xeiTNhnov2VHsTNkG0axHQB67WpRgcnDgZOPPABrAzYFhr7IF7A6ZfHQWBLeBgwAfQs9aF89rRr++xCkdpOx3vQNc799HpOIx9pEtsRw/uAGfglqt2E/QBlcqBkLqnFQIAAAAASUVORK5CYII="
                ></image>
              </svg>
            </div>
        </button>
        </form>
      </div>
    </section>
  );
}
