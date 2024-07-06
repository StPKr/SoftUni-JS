import { useState, useEffect } from "react";
import Effect from './Effect'

export default function Timer() {
    const [isManual, setIsManual] = useState(false);
    const [time, setTime] = useState(() => {
        const currentSeconds = new Date().getSeconds();
        console.log('Get seconds');

        return currentSeconds;
    });

    useEffect(() => {
        if (!isManual) {
            setTimeout(() => {
                setTime(prevTime => prevTime + 1);
                setIsManual(false);
            }, 1000);
        }
    }, [time, isManual]);

    const addSecondsHandler = () => {
        setIsManual(true);
        setTime(prevTime => prevTime + 10);
    };

    return (
        <>
            <h1>Timer</h1>
            <div>{time}</div>
            <button onClick={addSecondsHandler}>Add Seconds</button>
            {time < 60 && <Effect />}
        </>
    );
}
