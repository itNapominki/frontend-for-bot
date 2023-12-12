// import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import {
  // createBrowserRouter,
  // RouterProvider,
  // Routes,
  // Route,
} from "react-router-dom";

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
    tg.MainButton.show();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <div className="App">
      <div className="wrapper_input">
        {/* <Routes>
          <Route
            path="/frontend-for-bot/login"
            element={
              <>
                <h2>Запоните форму заявку</h2>
                <input className="input" placeholder="Имя заказчика"></input>
                <input
                  className="input"
                  placeholder="Телефон заказчика"
                ></input>
                <input className="input" placeholder="ФИО умершего"></input>
                <input className="input" placeholder="Место прощания"></input>
                <input className="input" placeholder="Район проживания"></input>
                <input className="input" placeholder="Дата поминок"></input>
                <input className="input" placeholder="Время прощания"></input>
                <input
                  className="input"
                  placeholder="Количество человек"
                ></input>
                <input className="input" placeholder="Комментарий"></input>
                <div className="button_container">
                  <button className="button" onClick={onClose}>
                    Отменить
                  </button>
                  <button className="button" onClick={onClose}>
                    Отправить
                  </button>
                </div>
              </>
            }
          />
          <Route path="/frontend-for-bot/auth" element={<></>} />
        </Routes> */}

        <>
          <h2>Заполните форму регистрации</h2>
          <input className="input" placeholder="Ваше имя" required></input>
          <input className="input" placeholder="Ваша Фамилия" required></input>
          <input className="input" placeholder="Ваш телефон" required></input>

          <div className="button_container">
            <button className="button" onClick={onClose}>
              Отменить
            </button>
            <button className="button" onClick={onClose}>
              Отправить
            </button>
          </div>
        </>
      </div>
    </div>
  );
}

export default App;
