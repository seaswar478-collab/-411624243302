import { useState } from "react";
import { useEffect } from "react";

export default function Count() {

    const [count, setCount] = useState(0)
    useEffect(()=>{document.title = count},[count])

    function Increment() {
        setCount(count + 1);
    }

    function Decrement() {
        setCount(count - 1);
    }

    function Reset() {
        setCount(0);
    }

    return (
        <>
            <div style={{ backgroundColor: "lightblue", padding: "20px" }}>

                <h2>{count}</h2>

                <button
                    onClick={Increment}
                    style={{ backgroundColor: "green", color: "white" }}
                >
                    Increment
                </button>

                <button
                    onClick={Decrement}
                    style={{ backgroundColor: "red", color: "white" }}
                >
                    Decrement
                </button>

                <button
                    onClick={Reset}
                    style={{ backgroundColor: "orange", color: "white" }}
                >
                    Reset
                </button>

                {
                    count>10 && <p>Greater than 10</p>
                }

            </div>
        </>
    );
}