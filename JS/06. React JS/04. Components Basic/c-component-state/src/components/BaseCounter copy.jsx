import { useState } from "react";

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


    return (
        <>
            <h2>Counter</h2>

            <p>{count}</p>

            <button onClick={decrementButtonClickHandler}>-</button>
            <button onClick={resetButtonClickHandler}>0</button>
            <button onClick={incrementButtonClickHandler}>+</button>
        </>
    );
}
