import React, { useState, useCallback } from 'react'

const funccount = new Set();

const CallbackUse = () => {

    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    const incrementCounter = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    const decrementCounter = useCallback(() => {
        setCount(count - 1);
    }, [count]);

    const incrementNumber = useCallback(() => {
        setNumber(number + 1);
    }, [number]);


    funccount.add(incrementCounter);
    funccount.add(decrementCounter);
    funccount.add(incrementNumber);
    alert(funccount.size)

    return (
        <div>
            Count:{count}
            <button onClick={incrementCounter}>Increase Counter</button>
            <button onClick={decrementCounter}>Decrese Counter</button>
            <button onClick={incrementNumber}>Increase Number</button>
        </div>
    )
}

export default CallbackUse
