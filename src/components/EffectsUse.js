import React, { useState, useEffect } from 'react'

const EffectsUse = () => {

    const [number, setNumber] = useState(0);
    const [state, setState] = useState(10);

    useEffect(() => {
        document.title = `you clicked ${number} times`;
        console.log("title changed");
    }, [number]);

    return (
        <div>
            <h1>hello world its {number}</h1>
            <h1>hello world its state{state}</h1>
            <button onClick={() => setNumber(number + 1)}> Click Me</button>
            <button onClick={() => setState(state + 1)}>Click Me</button>
        </div>
    );
}

export default EffectsUse
