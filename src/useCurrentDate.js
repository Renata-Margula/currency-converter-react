import { useState, useEffect } from 'react';

export const useCurrentDate = () => {
    const [date, setDate] = useState(new Date());
    const formattedDate = date.toLocaleString(
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
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [])

    return {
        formattedDate,
    }
};