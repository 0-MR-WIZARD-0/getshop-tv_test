import styles from "@/components/Footer/footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.wrapper_footer}>
      <div>
        <h2>Заполните форму</h2>
        <form>
          <textarea name="" id="" placeholder="Напишите свой вопрос"></textarea>
          <div>
            <input placeholder="Введите Email"></input>
            <div>
              <input type="checkbox"></input>
              <label>Я ознакомлен(а) с политикой конфиденциальности и <br/>
              согласен(на) на обработку персональных данных.</label>
            </div>
            <button>Отправить</button>
          </div>
        </form>
      </div>
    </footer>
  )
}

export default Footer