import { useState } from "react";

const Counter = (props) => {
    // var counterName = 'Kiran';
    const [count, setCount] = useState(props.initialValue);

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
            <h1>{props.counterName} Counter</h1>
            <div>
                <button onClick={decreaseCount}>-</button>
                {count}
                <button onClick={increaseCount}>+</button>
            </div>
        </div>
    )
}

export default Counter;