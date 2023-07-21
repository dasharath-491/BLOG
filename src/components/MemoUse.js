import React, { useState, useMemo } from 'react'

const MemoUse = () => {

    function squareNum() {
        console.log("Squaring will be done ")
        return Math.pow(number, 2)
    }

    const [number, setNumber] = useState(0)
    const squaredNum = useMemo(() => {
        return squareNum(number);
    }, [number])
    const [counter, setCounter] = useState(0)

    const onChangeHandler = (e) => {
        setNumber(e.target.value);
    }

    const counterHander = () => {
        setCounter(counter + 1)
    }


    return (
        <div>
            <input type='number' placeholder='Enter a Number' value={number} onChange={onChangeHandler}></input>
            <div>Output:{squaredNum}</div>
            <button onClick={counterHander}>Counter++</button>
            <div>Counter:{counter}</div>
        </div>
    )
}

export default MemoUse
