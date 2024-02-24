"use client"
import Image from "next/image";
import styles from "./fotos.module.css";
import Link from "next/link";

interface Foto {
    description?: string;
    url?: string;
  }
interface FotosProps {
    data: Foto[];
}

export default function Fotos({data}: FotosProps) {
  return (
    <section className={styles.main}>
      <div className={styles.mainContainer}>
        <h2>Fotos do <strong>Empreendimento:</strong></h2>
        
      </div>
    </section>
  );
}
