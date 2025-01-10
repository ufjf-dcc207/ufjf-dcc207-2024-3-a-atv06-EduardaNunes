import { useState } from "react";
import "./Counter.css"

type CounterProps = {
    active: string,
    notActive: string
}

export default function Counter({active, notActive}:CounterProps){

    const [emojis, setEmojis] = useState(initialState());

    function initialState(){
        return {
            count: 0,
            emojisArray:Array(5).fill({
                activeEmoji: active,
                notActiveEmoji: notActive,
                isActive: false
            })
        }
    }

    function changeCount(){
        console.log(emojis.count)
        const newEmojis = structuredClone(emojis);

        if(newEmojis.count === 5){
            setEmojis(initialState());
            return;
        }

        for(let i = 0; i <= emojis.count; i++){
            newEmojis.emojisArray[i].isActive = true;
        }
        newEmojis.count++;

        setEmojis(newEmojis);
    }

    return(
        <div>
            {emojis.emojisArray.map((emoji)=>(
                <div>{emoji.isActive ? emoji.activeEmoji : emoji.notActiveEmoji}</div>
            ))}
            <button onClick={changeCount}></button>
        </div>
    )
}