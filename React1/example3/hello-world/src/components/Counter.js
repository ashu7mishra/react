import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const decreaseCount = () =>{
        if (count >0){
            setCount(count-1);
        }
        
    }

    const increaseCount = () =>{
        setCount(count+1);
    }
    return (
        <div>
            <h1>Counter</h1>
            <div>
                <button onClick={decreaseCount}>-</button>
                {count}
                <button onClick={increaseCount}>+</button>
            </div>
        </div>
    )
}

export default Counter;