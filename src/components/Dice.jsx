import { useState } from "react";
import diceEmpty from "../assets/images/dice-empty.png"
import dice1 from "../assets/images/dice1.png"
import dice2 from "../assets/images/dice2.png"
import dice3 from "../assets/images/dice3.png"
import dice4 from "../assets/images/dice4.png"
import dice5 from "../assets/images/dice5.png"
import dice6 from "../assets/images/dice6.png"

function Dice() {

    const diceArray = [dice1, dice2, dice3, dice4, dice5, dice6];
    const [currentDice, setCurrentDice] = useState(diceEmpty);
    const handleClick = () => {
        setCurrentDice(diceEmpty)
        setTimeout(() => {
            const random = diceArray[Math.floor(Math.random() * diceArray.length)];
            setCurrentDice(random)
        }, 1000);
    };

    return (
        <>
            <p>Iteration 4 - Random Dice</p>
            <img
                src={currentDice}
                onClick={handleClick}
                className="random-dice"
            />
        </>
    );
}

export default Dice;