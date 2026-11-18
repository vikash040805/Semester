
import { useState } from 'react'
function ChangeName(){

    let [name, setName] = useState("Vikash");
    return (
        <div>
            <h1>Welcome {name}</h1>
            <button onClick={() => setName("Harsh")}>Change Name</button>
        </div>
    )
}
export default ChangeName