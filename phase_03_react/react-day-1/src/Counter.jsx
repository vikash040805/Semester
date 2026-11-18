import { useState } from "react"

// Create component named as Change Name.jsx
// h1=>Welcome {initialName}
// Change Name button => Welcome {Harsh}
function Counter(){
    const[count, SetCount] =useState(0);
    const handleInc=()=>{
        SetCount(count+1)
        console.log(count)
    }
    const handleDec=()=>{
        SetCount(count-1)
        console.log(count)
    }
    return (
        <div>

            <h1>Count:{count}</h1>
            <button onClick={handleInc}>Increment</button>
            <button onClick={handleDec}>Decrement</button>
        </div>
        
    )
}
export default Counter