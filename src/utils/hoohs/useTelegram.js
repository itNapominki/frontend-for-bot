import { useCallback, useEffect } from "react";

const useTelegram = (values, isValid) => {

  console.log(values);

    const tg = window.Telegram.WebApp;

    const onClose = () => {
        tg.close();
      };
    
      useEffect(() => {
        tg.ready();
        tg.MainButton.show();
        tg.MainButton.setParams({ text: "Отправить данные" });
      }, []);
    
      //данные в телеграмм
      const onSendData = useCallback(() => {
        tg.sendData(JSON.stringify(values));
      }, [values]);
    
      useEffect(() => {
        tg.onEvent("mainButtonClicked", onSendData);
        return () => {
          tg.offEvent("mainButtonClicked", onSendData);
        };
      }, [onSendData]);
    
      useEffect(() => {
        if (!isValid) {
          tg.MainButton.hide();
        } else {
          tg.MainButton.show();
        }
      }, [isValid]);

    return {
        onClose
    }

}

export default useTelegram;