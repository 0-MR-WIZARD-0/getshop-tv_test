"use client"

import Image from 'next/image'
import Logo from "@/assets/logo.svg"
import Burger from "@/assets/Burger.svg"
import Close from "@/assets/Close.svg"
import styles from "./header.module.scss" 
import { useEffect, useState } from 'react';

const Header = () => {

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.wrapper_header}>
        <nav className={styles.wrapper_nav}>
            <div className={styles.wrapper_logo}>
                <Image src={Logo} alt="logo"/>
            </div>
            {isSmallScreen ? (
              <div>
                <Image src={menuOpen ? Close : Burger} alt='burger' className={styles.burger} onClick={toggleMenu}/>
              </div>
            ) : (
            <div className={styles._content}>
                <a>Преимущества</a>
                <a>Как работаем</a>
            </div>
            )}
            <aside className={`${styles.menu} ${menuOpen ? `${styles.open}` : ""}`}>
              <ul>
                <li>Преимущества</li>
                <li>Как мы работаем</li>
              </ul>
            </aside>
        </nav>
    </header>
  )
}

export default Header