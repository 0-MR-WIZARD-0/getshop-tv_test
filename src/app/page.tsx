import Header from "@/components/Header";
import styles from "./page.module.css";
import Footer from "@/components/Footer";
import Clickwave from "@/assets/clickwave.svg";
import Zyphronix from "@/assets/zyphronix.svg";
import Novasphere from "@/assets/novasphere.svg";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <main className={styles.main}>
        <section className={styles.section_1}>
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
              <button>Операторам</button>
              <button>OTT сервисам</button>
            </div>
            <div>
              <p>Найдите идеальный баланс выручки и<br/>
                удовлетворённости пользователей с платформой<br/>
                рекламной монетизации</p>
            </div>
          </div>
        </section>
        <section className={styles.section_3}>
            <h2>Баланс между выручкой и удовлетворённостью пользователей</h2>
            <div className={styles.wrapper_section_3_content}>
              <div>
                {/* <Image/> */}
                <strong><p>Частотность<br/>
                под контролем</p></strong>
                <p>Чтобы не ронять NPS<br/>
                и не увеличивать отток<br/> пользователей</p>
              </div>
              <div>
                {/* <Image/> */}
              </div>
              <div>
                {/* <Image/> */}
                <strong><p>Максимальная <br/>выручка</p></strong>
                <p>За счёт заполенения всех<br/> рекламных мест по<br/> высокой цене</p>
              </div>
            </div>
        </section>
        <section className={styles.section_4}>
          <h2>Наши партнёры по монетизации</h2>
                <Image src={Clickwave} alt="#"/>
                <Image src={Zyphronix} alt="#"/>
                <Image src={Novasphere} alt="#"/>
        </section>
        <section className={styles.section_5}>
          <div>
            <h2>Подробные отчёты для вас и<br/> правообладателей</h2>
            <div>
              {/* <Image/> */}
              <p>Выручка, CTR, показы и другие<br/>
                показатели в реальном времени.</p>
            </div>
            <div>
              {/* <Image/> */}
              <p>Инструменты контроля качества трафика.</p>
            </div>
            <div>
              {/* <Image/> */}
              <p>Ежемесячные автоматические отчёты<br/>
                для каждого правообладателя.</p>
            </div>
            <button>Заказать звонок</button>
          </div>
                {/* <Image/> */}
        </section>
      </main>
      <Footer/>
    </div>
  );
}
