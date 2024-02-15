import "./App.css";
import { useCallback, useEffect, useState } from "react";
import {} from "react-router-dom";

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
      <>
        <input
          className="input"
          type="text"
          placeholder="Ваше имя"
          required
          value={name}
          onChange={onChangeName}
        ></input>
        <input
          className="input"
          type="text"
          placeholder="Ваш телефон"
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
      </>
    );
  }

  return (
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
  );
}

export default App;
