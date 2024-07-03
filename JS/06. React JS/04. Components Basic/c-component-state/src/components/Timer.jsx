import { useState } from 'react';

export default function Timer() {
    const [time, setTime] = useState(0);

    // let time = stateArr[0]; // Read only
    // let time = stateArr[1];

    setTimeout(() => {
        setTime(time + 1);
        // setCount(oldCount => oldCount + 1); // Protects from racing congitions
    }, 1000);

    return (
        <>
            <h2>Timer</h2>

            <p>{time}</p>
        </>
    );
}
