"use client"

import styles from "@/components/Footer/footer.module.scss";
import { useState } from 'react';

const Footer = () => {

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (!validateEmail(value)) {
      setError('Email введён некорректно');
    } else {
      setError('');
    }
  };

  return (
    <footer className={styles.wrapper_footer}>
      <div>
        <h2>Заполните форму</h2>
        <form>
          <textarea name="" id="" placeholder="Напишите свой вопрос"></textarea>
          <div>
            <input type="email"
                  id="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Введите email"></input>
                  {error && <p style={{ color: 'red', marginTop: "30px" }}>{error}</p>}
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