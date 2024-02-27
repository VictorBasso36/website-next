"use client"
import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useOpen } from '../../providers/modalProvider'

export default function Navbar() {
    const [menu, setMenu] = useState(false);
    useEffect(() => {
      if (menu) {
        document.documentElement.style.overflow = "hidden";
      } else {
        document.documentElement.style.overflow = "";
      }
    }, [menu]);
    const pathname = usePathname()
    const { setOpen } = useOpen() 
  return (
    <>
      <div className={styles.whatsappButton} onClick={() => setOpen('whatsapp')} >                 
        <Image src="/whatsapp.svg" width={25} height={25} alt='Whatsapp de contato para imobiliária - VilaSul. '></Image>               
      </div>
        { menu && 
            <div className={styles.mainMenuHere} onClick={() => setMenu(!menu)}>
                <div className={styles.ModalHere}>
                    <ul>
                        <li>
                            <Link href="/">
                                <p><strong>Home</strong></p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <p>Lançamentos</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <p>Portfólio</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <p>Invista conosco</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <p>Contato</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <button className={styles.mainButton}>
                                    <p><strong>Área do Cliente</strong></p>
                                </button>
                            </Link>
                        </li>
                        <br />
                    </ul> 
                </div>
            </div>
        }
        <nav className={styles.main}>
            <div className={styles.containerNav}>
                <Link href="/" title="Conheça o Vila Sul Empreendimentos - Melhores Imovéis para investir !">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="162"
                    height="77"
                    viewBox="0 0 162 77"
                    >
                    <image
                        width="162"
                        height="77"
                        data-name="Camada 2"
                        xlinkHref="data:img/png;base64,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"
                    ></image>
                    </svg>
                </Link>
                <ul>
                    <li>
                        <Link href="/">
                            <p><strong>Home</strong></p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <p>Lançamentos</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <p>Portfólio</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <p>Invista conosco</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <p>Contato</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <button className={styles.mainButton}>
                                <p><Image src="/userArea.svg" width={20} alt="Conheça a área do client da Vila Sul" height={20}></Image> Área do Cliente</p>
                            </button>
                        </Link>
                    </li>
                </ul> 
                <div className={`${styles.hambmenu}`}>
                    <div 
                    className={`${styles.hambmenuContainer} ${menu ? styles.menuExistis : ''}`} 
                    onClick={() => setMenu(!menu)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
    </>
  );
}
