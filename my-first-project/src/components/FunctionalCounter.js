import { useState } from "react"

function FunctionalCounter() {
    const [counter, setCounter] = useState(0);
    const [varname, funname] = useState("Blessing");
    const lastName = 'Umolo'


    const increment = () => {
        setCounter(counter + 1);
        funname(varname + lastName)
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    return <div>
        <div>Counter value: {counter}</div>
        <div>Your name: {varname}</div>
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    </div>

} 

export default FunctionalCounter;