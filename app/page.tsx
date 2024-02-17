import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import MainBanner from "./components/homeBanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <MainBanner />
      </main>
      <Footer/>
    </>
  );
}
