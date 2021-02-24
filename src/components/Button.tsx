import {useState} from 'react';


//properties that my button can receive
interface ButtonProps{
    color:string;
    children:string;
}
//setCounter create new value for counter
export function Button(props: ButtonProps){
    const [counter,setCounter] = useState(1)

    function incremeant(){
        setCounter(counter + 1);
    }
    return(
        <button type ="button" style={{backgroundColor: props.color}}
        onClick={incremeant}
        >
            {props.children} <strong>{counter}</strong>
        </button>
    )
}