import "./App.css";
import { useCallback, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

const tg = window.Telegram.WebApp;

function App() {
  const onClose = () => {
    tg.close();
  };

  function Form() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [nameTlg, setNmaeTlg] = useState("");

    useEffect(() => {
      tg.ready();
      tg.MainButton.show();
      tg.MainButton.setParams({ text: "Отправить данные" });
    }, []);

    //данные в телеграмм
    const onSendData = useCallback(() => {
      const data = {
        name,
        phone,
        nameTlg,
      };
      tg.sendData(JSON.stringify(data));
    }, [name, phone, nameTlg]);

    useEffect(() => {
      tg.onEvent("mainButtonClicked", onSendData);
      return () => {
        tg.offEvent("mainButtonClicked", onSendData);
      };
    }, [onSendData]);

    useEffect(() => {
      if (!name || !phone || !nameTlg) {
        tg.MainButton.hide();
      } else {
        tg.MainButton.show();
      }
    }, [name, phone, nameTlg]);

    const onChangeName = (e) => {
      setName(e.target.value);
    };

    const onChangePhone = (e) => {
      setPhone(e.target.value);
    };

    const onChangeNmaeTlg = (e) => {
      setNmaeTlg(e.target.value);
    };

    console.log(name);
    console.log(phone);

    return (
      <form className="form">

<fieldset class="radio-set">
    <legend class="visually-hidden">Организация:</legend>
    
    <div class="radio-container">
      <label class="radio-label">
        <input
          class="radio"
          type="radio"
          name="browser"
          value="ie"
          id="ie"
          checked
  required
        />
        <span class="radio-title">Агент</span>
      </label>
      <label class="radio-label">
        <input
          class="radio"
          type="radio"
          name="browser"
          value="opera"
          id="opera"
          
  required
        />
        <span class="radio-title">Работник СПЗ</span>
      </label>
      
    </div>
  </fieldset>

        <input
          className="input"
          type="text"
          placeholder="Ваше имя"
          required
          minlength="4"
          maxlength="20"
          value={name}
          onChange={onChangeName}
        ></input>
        <input
          className="input"
          type="tel"
          pattern="[0-9]{11}"
          placeholder="89013337722"
          required
          value={phone}
          onChange={onChangePhone}
        ></input>


         <input
          className="input"
          type="text"
          placeholder="Ваш имя телеграмм @name"
          required
          value={nameTlg}
          onChange={onChangeNmaeTlg}
        ></input> 
        <button type="submit">Сабмит</button>       
      </form>
    );
  }




  return (
    <Routes>
   <Route path="/frontend-for-bot" element={
    <div className="App">
      <div className="wrapper_input">
        <h2>Заполните форму регистрации</h2>
        <Form />
        <div className="button_container">
          <button className="button" onClick={onClose}>
            Отменить
          </button>
        </div>
      </div>
    </div>


   } />
      <Route path="frontend-for-bot/books" element={

    <div className="App">
      Вторая форма
    </div>
  
  } />


    </Routes>
  );
}

export default App;
