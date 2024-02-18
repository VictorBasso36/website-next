import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";

export default function MainBanner() {
  return (
    <section className={styles.main} style={{marginTop: "160px"}}>
        <div className={styles.mainContainer}>
            <h1>Há mais de <strong>35 anos</strong><br />
            <span>concretizando sonhos</span></h1>
            <Link href="/">
              <button>
                <p>Quero realizar meu sonho!</p>
                <div className={styles.buttonDetail}>
                  <strong>{'>'}</strong>
                </div>
              </button>
            </Link>
            <p><strong>Telefone</strong><span><a href=""><p>(11) 4994-0522</p></a></span></p>
        </div>
    </section>
  );
}
