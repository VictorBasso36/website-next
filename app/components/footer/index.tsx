"use client"
import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";


export default function Footer() {
  return (
    <>
    <footer className={styles.main}>
        <div className={styles.mainContainer}>
            <ul>
              <li>
                <Link href="/" title="Conheça o Vila Sul Empreendimentos - Melhores Imovéis para investir !">
                  <Image src="/mainlogo.svg" width={130} height={130} alt="Imob - inteligência Imobiliária - Jarinu"></Image>
                </Link>
              </li>
              <li>
                <h5>SOBRE</h5>
                <p><Link href="/Lancamentos">Lançamentos</Link></p>
                <p><Link href="/Lancamentos">Portfólio</Link></p>
                <p><Link href="/Lancamentos">Invista</Link></p>
                <p><Link href="/Lancamentos">Contatos</Link></p>
              </li>
              <li>
                <h5>CONTATO</h5>
                <p>Fala com um<br /> de nossos especialistas:</p>
                <p><a href=""><strong>(11) 4994-0522</strong></a></p>
                <p><a href="">Rua Adolfo Bastos, 598 | Sala 11
                Santo André - SP | CEP 09041-000</a></p>
              </li>
              <li>
                <h5>ATENDIMENTO</h5>
                <p>Segunda a Domingo, das 9h ás 18h</p>
              </li>
            </ul>
     
        </div>
        <div className={styles.mainLogoHere}>
            <Link href="https://www.luziac.com.br/" target="_blank" title="Desenvolvido por - Luziac Marketing Imobiliario">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="300"
                height="80"
                viewBox="0 0 300 80"
              >
                <image
                  width="300"
                  height="80"
                  data-name="Camada 27"
                  xlinkHref="data:img/png;base64,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"
                ></image>
              </svg>
            </Link>
          </div>
        <br />
        <br />
        <br />
    </footer>
    </>
  );
}
