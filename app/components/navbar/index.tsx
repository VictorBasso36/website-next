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
                                {pathname === "/Contato" ? <p><strong>Home</strong></p> : <p>Home</p>}
                            </Link>
                        </li>
                        <li>
                            <Link href="/Portfolio">
                                {pathname === "/Portfolio" ? <p><strong>Portfólio</strong></p> : <p>Portfólio</p>}
                            </Link>
                        </li>
                        <li>
                        <Link href="/#InvestaConosco">
                                {pathname === "/InvistaConosco" ? <p><strong>Invista conosco</strong></p> : <p>Invista conosco</p>}
         
                            </Link>
                        </li>
                        <li>
                            <Link href="/#Contato">
                                {pathname === "/InvistaConosco" ? <p><strong>Contato</strong></p> : <p>Contato</p>}
                              
                            </Link>
                        </li>
                        <li>
                            <Link href="https://adm059450.superlogica.net/clients/areadocliente" target="_blank">
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

                   <Image src="/mainlogo.svg" width={130} height={130} alt="Imob - inteligência Imobiliária - Jarinu"></Image>
                </Link>
                <ul>
                    <li>
                        <Link href="/">
                            <p><strong>Home</strong></p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/#Lancamentos">
                          <p>Localização</p>
                        </Link>
                    </li>

                    <li>
                        <Link href="/Portfolio">
                            <p>Fotos</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/#InvestaConosco">
                          <p>Contato</p>
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
