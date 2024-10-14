"use client"

import Image from 'next/image'
import Logo from "@/assets/logo.svg"
import Burger from "@/assets/Burger.svg"
import styles from "./header.module.scss" 
import { useEffect, useState } from 'react';

const Header = () => {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1440);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={styles.wrapper_header}>
        <nav className={styles.wrapper_nav}>
            <div className={styles.wrapper_logo}>
                <Image src={Logo} alt=""/>
            </div>
            {isSmallScreen ? (
              <div>
                <Image src={Burger} alt='burger'/>
              </div>
            ) : (
            <div className={styles._content}>
                <a>Преимущества</a>
                <a>Как работаем</a>
            </div>
            )}
        </nav>
    </header>
  )
}

export default Header