import React ,{useState} from "react";

const Counter = function(){
    const [count, setCount] = useState(0);

    return(
        <div>
            <div>
                <h1>Counter:{count}</h1>
                <hr />

                <button 
                id="btn1" 
                onClick={() => setCount(count + 1)}> Increment </button>

                <button
                id="btn1"
                disabled={count === 0}
                onClick={() => setCount(count - 1)}> Decrement </button>

                <button 
                id="btn1" 
                onClick={() => setCount(0)}> Reset </button>

            </div>
        </div>
    )

}

export default Counter;