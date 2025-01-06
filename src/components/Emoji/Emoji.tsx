import "./Emoji.css"

const EMOJIS = new Map<string, string>([
    ["happy", "😊"],
    ["sick", "🤢"],
    ["dead", "💀"]
])
// EMOJIS.set("happy", "😊")

export default function Emoji(){
    let situacao = "Dead"
    return <div className="emoji">{EMOJIS.get(situacao) || "😶‍🌫️"}</div>
}