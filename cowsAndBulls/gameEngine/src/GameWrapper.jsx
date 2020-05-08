import React, { useEffect, useState } from "react";
import Game from "./Game.jsx";


function GameWrapper() {
    const [hasWon, setHasWon] = useState(false);
    const [tries, setTries] = useState(0);

    const resetTries = () => {
        setTries(0);
    }
    const updateTries = () => {
        setTries(tries + 1);
    };

    const updateHasWon = () => {
        setHasWon(!hasWon);
    }


    return <Game onHasWon={updateHasWon} hasWon={hasWon} onChangeTries={updateTries} resetTries={resetTries} tries={tries}/>
}

export default GameWrapper;
