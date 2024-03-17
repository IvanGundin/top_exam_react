import { useState, useEffect } from 'react';
function CurrentDateTime() {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000); // Обновляем время каждую секунду
        return () => {
            clearInterval(timerID); // Очищаем интервал при размонтировании компонента
        };
    }, []);
    const tick = () => {
        setCurrentDateTime(new Date()); // Обновляем состояние с текущей датой и временем
    };
    return (<span style={{ fontSize: '15px', color: '#03a9f4' }}>{currentDateTime.toLocaleString()}</span>);
}
export default CurrentDateTime;