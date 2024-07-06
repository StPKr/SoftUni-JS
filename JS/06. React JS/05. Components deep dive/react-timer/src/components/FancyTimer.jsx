import { useEffect, useState } from "react";
import styles from './FancyTimer.module.css';

export default function FancyTimer() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log('interval');
            setTime(oldTime => oldTime + 1);
        }, 1000);

        return () => {
            clearTimeout(timer);
        }
    }, []);
    
    const addSecondsHandler = () => {
        setTime(prevTime => prevTime + 10);
    };

    return (
        <>
            <h2 className={styles['fancy-timer']}>Fancy Timer</h2>
            <div>{time}</div>
            <button onClick={addSecondsHandler}>Add Seconds</button>
        </>
    );
} 
