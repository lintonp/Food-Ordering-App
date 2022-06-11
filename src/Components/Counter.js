import React, {useState, useEffect} from 'react'
import Card from './UI/Card';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter+1)
        }, 1000);

        //return () => clearInterval(interval);
    }, []);

    return (
        <Card>{counter}</Card>
    )
}

export default Counter