import {useEffect, useState} from 'react'

const LifeCycleExample = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('Component is mounted');
        const timer = setInterval(() => {
            console.log('Hi');
            setCount(count+1);
        }, 1000);
        return () => {
        console.log('component is unmounted');
        clearInterval(timer);
        }
    }, []);

    return (
        <h1>React Life Cycle</h1>
    )
}

export default LifeCycleExample;