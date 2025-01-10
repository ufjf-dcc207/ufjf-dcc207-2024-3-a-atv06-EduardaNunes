import { useState } from "react";
import "./Counter.css"

type CounterProps = {
    icone: string
}

export default function Counter({icone}:CounterProps){

    const [valor, setValor] = useState(0);

    function changeCount(){
        if(valor === 5){
            setValor(0);
        }else{
            setValor(valor + 1);
        }
    }

    return(
        <div>
            <span>{icone.repeat(valor)}</span>
            <span className="inativo">{icone.repeat(5-valor)}</span>
            <button onClick={changeCount}>+</button>
        </div>
    )
}