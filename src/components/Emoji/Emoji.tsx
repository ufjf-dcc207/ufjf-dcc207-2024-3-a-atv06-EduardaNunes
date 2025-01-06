import "./Emoji.css"

const EMOJIS = new Map<string, string>([
    ["happy", "😊"],
    ["sick", "🤢"],
    ["dead", "💀"]
])
// EMOJIS.set("happy", "😊")

export default function Emoji(){
    let situacao = "Dead"

    function toHappy(){
        console.log("To Happy!")
        situacao = "happy"
    }

    function toDead(){
        console.log("To Dead!")
        situacao = "dead"
    }

    return (
        <div className="emoji">
            <div className="situacao">{EMOJIS.get(situacao) || "😶‍🌫️"}</div>
            <div className="acoes">
                <button onClick={toHappy}>Vivo</button>
                <button onClick={toDead}>Morto</button>
            </div>
        </div>
    )
}