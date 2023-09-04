import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
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

  // function redirectToPage() {
  //   console.log("Проверка");
  //   window.location.href =
  //     "https://yandex.ru/maps/org/kanon/198561803667/?add-review=true"; // Замените "http://example.com" на URL страницы, на которую вы хотите перейти
  // }

  return (
    <div className="App">
      <div className="wrapper_input" >
      <Routes>
            <Route
              path="/frontend-for-bot/login"
              element={
                <>
                <h2>Запоните форму заявку</h2>
        <input className="input" placeholder="Имя заказчика"></input>
        <input className="input" placeholder="Телефон заказчика"></input>
        <input className="input" placeholder="ФИО умершего"></input>
        <input className="input" placeholder="Место прощания"></input>
        <input className="input" placeholder="Район проживания"></input>
        <input className="input" placeholder="Дата поминок"></input>
        <input className="input" placeholder="Время прощания"></input>
        <input className="input" placeholder="Количество человек"></input>
        <input className="input" placeholder="Комментарий"></input>
        <div className="button_container">
        <button className="button" onClick={onClose}>Отменить</button>
        <button className="button" onClick={onClose}>Отправить</button>
      </div>
                </>
              }
            /> 
            <Route
              path="/frontend-for-bot/auth"
              element={
                <>
                <h2>Запоните форму заявку</h2>
        <input className="input" placeholder="Ваше имя"></input>
        <input className="input" placeholder="Ваша Фомилия"></input>
        <input className="input" placeholder="Ваш телефон"></input>
        
        <div className="button_container">
        <button className="button" onClick={onClose}>Отменить</button>
        <button className="button" onClick={onClose}>Отправить</button>
      </div>
                </>
              }
            /> 
            </Routes>



       




      </div>
      

      {/* <a href='https://yandex.ru/maps/org/kanon/198561803667/?add-review=true' target="_blank">Яндекс карты ссылка</a>
<button onClick={()=> redirectToPage() }  >Яндекс карты кнопка</button> */}
    </div>
  );
}

export default App;
