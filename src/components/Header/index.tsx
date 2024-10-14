import Image from 'next/image'
import Logo from "@/assets/logo.svg"
import styles from "./header.module.scss" 

const Header = () => {
  return (
    <header className={styles.wrapper_header}>
        <nav className={styles.wrapper_nav}>
            <div className={styles.wrapper_logo}>
                <Image src={Logo} alt=""/>
            </div>
            <div className={styles._content}>
                <a>Преимущества</a>
                <a>Как работаем</a>
            </div>
        </nav>
    </header>
  )
}

export default Header