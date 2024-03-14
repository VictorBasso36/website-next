"use client"
import Image from "next/image";
import styles from "./status.module.css";
import Link from "next/link";

interface Progresso {
    name?: string;
    percent?: string;
}

interface StatusProps {
    data: Progresso[];
}

export default function Status({data}: StatusProps) {
  return (
    <section className={styles.main}>
      <div className={styles.mainContainer}>
        <h3>Progresso das <strong>Obras:</strong></h3>
        <div className={styles.contentState}>
          <ul>
            {data.map((item, index) => (

              <li key={index}><div className={styles.bgHere}
              style={{
                background: `linear-gradient(90deg, rgba(255,255,255,1)  ${item?.percent}, rgba(255,255,255,0.4) ${item?.percent})`
              }}
              ><p>{item.name}</p></div><div className={styles.percentHere}><p>{item.percent} </p></div></li>
            
            ))}
          </ul>
          <Image src="/statusBuild.svg" alt="" width={450} height={450} />
        </div>
      </div>
    </section>
  );
}
