import { useState, useEffect } from 'react';

export const useCurrentDate = () => {
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
    }, [])

    return {
        dateFormat,
    }
};