import { useState, useEffect } from 'react';
import './style.css';

const Clock = () => {
    const [date, setDate] = useState(new Date());
    const dateFormat = date.toLocaleString(
        undefined,
        {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        },
    );

    useEffect(() => {
        setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(setDate);
        };
    }, []);

    return (
        <div className="form__clock">
            <p className="form__clock--date">
                Dzisiaj jest {dateFormat}
            </p>
        </div>
    );
};

export default Clock;
