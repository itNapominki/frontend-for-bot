import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

const tg = window.Telegram.WebApp;

function App() {

  useEffect(()=> {
    tg.ready();

  }, [])

  const onClose = () => {
    tg.close();

  }
  return (
    <div className="App">  
    <input placeholder='Ввод'></input>    
    <input placeholder='Ввод'></input>      
    <button onClose={onClose}>Кнопка</button>
    </div>
  );
}

export default App;
