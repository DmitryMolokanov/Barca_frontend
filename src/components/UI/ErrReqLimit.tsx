import { useEffect, useState } from "react";

const ErrReqLimit = () => {
  const [counter, setCounter] = useState<number>(30);
  useEffect(() => {
    const timer =
      counter > 0 &&
      setInterval(() => {
        setCounter(counter - 1);
      }, 1000);
    return () => clearInterval(timer);
  }, [counter]);
  return (
    <div className="req-limit-container">
      <h1>Ошибка!</h1>
      <p>
        Данный сайт работает с бесплатной версией API, которую предоставляет
        www.football-data.org. Бесплатная версия дает возможность выполнить
        только 10 запросов в минуту. Если вы увидели данное сообщение, значит
        данный лимит был превышен. Для того, чтобы продолжить пользоваться
        сайтом вам необходимо подождать <span>{counter}</span> секунд(ы).
      </p>
      <p>
        В настоящее время вы можете просмотреть следующие страныцы: <br />
        <div className="available-pages">
          <a href="/trophy">Трофеи</a>
          <a href="/history">История</a>
          <a href="/legends">Легенды Клуба</a>
        </div>
      </p>
      <div className="req-limit-restart">
        <a
          href={window.location.href}
          style={
            counter > 0
              ? { backgroundColor: "rgb(191, 21, 21)" }
              : { backgroundColor: "green" }
          }
        >
          Перезагрузить
        </a>
      </div>
    </div>
  );
};

export default ErrReqLimit;
