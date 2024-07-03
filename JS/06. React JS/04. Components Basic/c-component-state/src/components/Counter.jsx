import { useState } from "react";

import KillCounter from "./KillCounter";
import './Counter.css';

export default function Counter() {
    const [count, setCount] = useState(0);
    
    const incrementButtonClickHandler = () => {
        setCount(count + 1);
    };
    
    const resetButtonClickHandler = (e) => {
        console.log(e);
        setCount(0);
    };

    const decrementButtonClickHandler = () => {
        setCount(count - 1);
    };

    let countText = `Positive ${count}`;
    let color = 'green';
    if (count < 0) {
        countText = `Negative ${count}`;
        color = 'red';
    }

    const enableIncrement = count < 10;

    return (
        <>
            <h2>Counter</h2>

            <KillCounter count={count} />

            <p
                style={{color}}
                className={count < 0 
                    ? 'negative-text' 
                    : 'positive-text'
                }
            >
                {countText}
            </p>

            <button onClick={decrementButtonClickHandler}>-</button>
            <button onClick={resetButtonClickHandler}>0</button>
            {enableIncrement && <button onClick={incrementButtonClickHandler}>+</button>}
        </>
    );
}
