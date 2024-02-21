 import "./App.css";
// import { useCallback, useEffect, useState } from "react";
 import Start from "./Page/Start/Start";


// const tg = window.Telegram.WebApp;

 function App() {
//   const onClose = () => {
//     tg.close();
//   };

//   function Form() {
//     const [name, setName] = useState("");
//     const [phone, setPhone] = useState("");
//     const [nameTlg, setNmaeTlg] = useState("");


   



//     useEffect(() => {
//       tg.ready();
//       tg.MainButton.show();
//       tg.MainButton.setParams({ text: "Отправить данные" });
//     }, []);

//     //данные в телеграмм
//     const onSendData = useCallback(() => {
//       const data = {
//         name,
//         phone,
//         nameTlg,
//       };
//       tg.sendData(JSON.stringify(data));
//     }, [name, phone, nameTlg]);

//     useEffect(() => {
//       tg.onEvent("mainButtonClicked", onSendData);
//       return () => {
//         tg.offEvent("mainButtonClicked", onSendData);
//       };
//     }, [onSendData]);

//     useEffect(() => {
//       if (!name || !phone || !nameTlg) {
//         tg.MainButton.hide();
//       } else {
//         tg.MainButton.show();
//       }
//     }, [name, phone, nameTlg]);

//     const onChangeName = (e) => {
//       setName(e.target.value);
//     };

//     const onChangePhone = (e) => {
//       setPhone(e.target.value);
//     };

//     const onChangeNmaeTlg = (e) => {
//       setNmaeTlg(e.target.value);
//     };

//     console.log(name);
//     console.log(phone);

//     return (
//       <form className="form">

// <fieldset className="radio-set">
//     <legend className="visually-hidden">Организация:</legend>
    
//     <div className="radio-container">
//       <label className="radio-label">
//         <input
//           className="radio"
//           type="radio"
//           name="browser"
//           value="ie"
//           id="ie"
          
//   required
//         />
//         <span className="radio-title">Агент</span>
//       </label>
//       <label className="radio-label">
//         <input
//           className="radio"
//           type="radio"
//           name="browser"
//           value="opera"
//           id="opera"
          
//   required
//         />
//         <span className="radio-title">Работник СПЗ</span>
//       </label>
      
//     </div>
//   </fieldset>

//         <input
//           className="input"
//           type="text"
//           placeholder="Ваше имя"
//           required
//           minLength="4"
//           maxLength="20"
//           value={name}
//           onChange={onChangeName}
//         ></input>
//         <input
//           className="input"
//           type="tel"
//           pattern="[0-9]{11}"
//           placeholder="89013337722"
//           required
//           value={phone}
//           onChange={onChangePhone}
//         ></input>


//          <input
//           className="input"
//           type="text"
//           placeholder="Ваш имя телеграмм @name"
//           required
//           value={nameTlg}
//           onChange={onChangeNmaeTlg}
//         ></input> 
//         <button type="submit">Сабмит223344</button>       
//       </form>
//     );
//   }




  return (
    <div className="App">
      <Start/>
    </div>
     )
}

export default App;
