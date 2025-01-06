import { useState } from "react"
import "./Emoji.css"

const EMOJIS = new Map<string, string>([
    ["happy", "😊"],
    ["sick", "🤢"],
    ["dead", "💀"]
])

// EMOJIS.set("happy", "😊")

export default function Emoji(){
    const [situacao, setSituacao] = useState("deady")

    function toHappy(){
        // console.log("To Happy!")
        setSituacao("happy")
    }

    function toSick(){
        setSituacao("sick")
    }

    function toDead(){
        // console.log("To Dead!")
        setSituacao("dead")
    }

    function toCycle(){

        switch(situacao){
            case "happy":
                setSituacao("sick")
                break
            case "sick":
                setSituacao("dead")
                break
            case "dead":
                setSituacao("happy")
                break
            default:
                setSituacao("happy")
                break
        }

    }

    return (
        <div className="emoji">
            <div className="situacao">{EMOJIS.get(situacao) || "😶‍🌫️"}</div>
            <div className="acoes">
                <button onClick={toHappy}>Vivo</button>
                <button onClick={toSick}>Doente</button>
                <button onClick={toDead}>Morto</button>
                <button onClick={toCycle}>Próximo</button>
            </div>
        </div>
    )
}