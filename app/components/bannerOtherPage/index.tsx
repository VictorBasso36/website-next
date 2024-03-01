"use client"
import Image from "next/image";
import styles from "./index.module.css";


export default function BannerOtherPage() {
    
  return (
    <>
        <div className={styles.mainContent}>
            <div className={styles.mainContentContainer}>
                <h1>Nosso Passado, <br /><span>presente e futuro!</span></h1>
            </div>      
        </div>
    </>
  )
}
