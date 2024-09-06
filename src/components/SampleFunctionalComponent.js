import { useState, useEffect } from "react";

function SampleFunctionalComponent(){

    // const {name, age, hobbies} = props;

    let [name, setName] = useState("Raymart Rosali");

    let changeName = () => {
        setName("Juan Dela Cruz");
    }

    let [count, setCount] = useState(0);

    let [second, setSecond] = useState(0);

    useEffect(
        () => {
            console.log("The website has rendered");
        }
        , 
        [count, second]
    )
    return(
        <>
           <h1>Functional Component</h1>
           <h1>{name}</h1>
           <button onClick={changeName}>Change Name</button>


           <br></br>
           {count}
           <br></br>
           <button onClick={() => setCount((count) => count + 1)}>Add 1</button>
           <button onClick={() => setCount((count) => count - 1)}>Minus 1</button>

           <br></br>
           {second}
           <br></br>
           <button onClick={() => setSecond((second) => second + 1)}>Add 1</button>
           <button onClick={() => setSecond((second) => second - 1)}>Minus 1</button>
        </>
    )
}

export default SampleFunctionalComponent;