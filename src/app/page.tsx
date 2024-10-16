"use client"

import Header from "@/components/Header";
import styles from "./page.module.scss";
import Footer from "@/components/Footer";
import Clickwave from "@/assets/clickwave.svg";
import Zyphronix from "@/assets/zyphronix.svg";
import Novasphere from "@/assets/novasphere.svg";
import Glass from "@/assets/glass.png";
import Arrow from "@/assets/arrow.png";
import computer from "@/assets/computer.png";
import group_section_3 from "@/assets/group_section_3.svg";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [selectedOption, setSelectedOption] = useState<'operator' | 'ott'>('operator');

  const handleClick = (option: 'operator' | 'ott') => {
    setSelectedOption(option);
  };

  return (
    <div className={styles.page}>
      <Header/>
      <main className={styles.main}>
        <section className={styles.section_1}>
          <Image src={Glass} alt="glass"/>
          <h1>Монетизируйте клиентскую <br/> базу, не снижая NPS</h1>
          <p>Найдите идеальный баланс выручки 
            и удовлетворённости пользователей с платформой 
            рекламной монетизации</p>
          <div><button>Заказать звонок</button></div>
        </section>
        <section className={styles.section_2}>
          <div>
            <h2>Дополнительные источники <br/>выручки для разных <br/>компаний</h2>
          </div>
          <div>
            <div className={styles.wrapper_button}>
              <button 
                onClick={() => handleClick('operator')}
                className={`${selectedOption === 'operator' ? `${styles.button_active}` : `${styles.button_inactive}`}`}>Операторам</button>
              <button 
                onClick={() => handleClick('ott')}
                className={`${selectedOption === 'ott' ? `${styles.button_active}` : `${styles.button_inactive}`}`}>OTT сервисам</button>
            </div>
            <div>
            {selectedOption === 'operator' && (
              <p>Найдите идеальный баланс выручки и<br/>
                удовлетворённости пользователей с платформой<br/>
                рекламной монетизации</p>
            )}
            {selectedOption === 'ott' && (
              <p>Дополнительные возможности обогащения данных<br/> об аудитории и монетизации</p>
            )}
            </div>
          </div>
        </section>
        <section className={styles.section_3}>
            <div></div>
            <h2>Баланс между выручкой и удовлетворённостью пользователей</h2>
            <div className={styles.wrapper_section_3_content}>
              <div>
                <Image src={Arrow} alt="arrow"/>
                <strong><p>Частотность<br/>
                под контролем</p></strong>
                <p>Чтобы не ронять NPS<br/>
                и не увеличивать отток<br/> пользователей</p>
              </div>
              <div className={styles.wrapper_img}>
                <Image src={group_section_3} alt="group_section_3"/>
              </div>
              <div>
                <Image src={Arrow} alt="arrow"/>
                <strong><p>Максимальная <br/>выручка</p></strong>
                <p>За счёт заполенения всех<br/> рекламных мест по<br/> высокой цене</p>
              </div>
            </div>
        </section>
        <section className={styles.section_4}>
          <h2>Наши партнёры по монетизации</h2>
          <div>
                <Image src={Clickwave} alt="#"/>
                <Image src={Zyphronix} alt="#"/>
                <Image src={Novasphere} alt="#"/>
          </div>
        </section>
        <section className={styles.section_5}>
          <div></div>
          <div>
            <h2>Подробные отчёты для вас и<br/> правообладателей</h2>
            <div>
              <Image src={Arrow} alt="arrow"/>
              <p>Выручка, CTR, показы и другие<br/>
                показатели в реальном времени.</p>
            </div>
            <div>
              <Image src={Arrow} alt="arrow"/>
              <p>Инструменты контроля качества трафика.</p>
            </div>
            <div>
              <Image src={Arrow} alt="arrow"/>
              <p>Ежемесячные автоматические отчёты<br/>
                для каждого правообладателя.</p>
            </div>
            <button>Заказать звонок</button>
          </div>
          <Image src={computer} alt="PC"/>
        </section>
      </main>
      <Footer/>
    </div>
  );
}