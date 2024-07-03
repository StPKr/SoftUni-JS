import { useEffect, useState } from "react"

export default function Timer() {
    const [time, setTime] = useState(() => {
        const currentSeconds = new Date().getSeconds();
        console.log('Get seconds');

        return currentSeconds;
    });

    useEffect(() => {
        setTimeout(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);
    }, []);

    const addSecondsHandler = () => {
        setTime(prevTime => prevTime + 10);
    }

    return (
        <>
            <h1>Timer</h1>
            <div>
                {time}
            </div>
            <button onClick={addSecondsHandler}>Add Seconds</button>
        </>
    )
}