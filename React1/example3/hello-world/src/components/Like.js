import { useState } from "react";

const Like = () =>{

    const [count, setCount] = useState(101)

    // var count = 100;

    const handleLike = () => {
        // count++;
        // console.log(count);
        setCount(count+1)

    }

    return (
        <div className="Like-wrapper">
            {/* <div><button onclick=''>Like</button> - {count}</div> js code */}
            <div><button onClick={handleLike}>Like</button> - {count}</div> {/*react code*/}
        </div>
        
    )
}

export default Like;