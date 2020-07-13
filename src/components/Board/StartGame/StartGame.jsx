import React from "react";

const StartGame = (props) => {
    const startNewGame = () => {
        const isMakeStart = window.confirm("Начать новую игру?");

        if (isMakeStart) {
            props.startNewGame();
            props.getResetDices();
        }
    };


    return (
        <div>
            <button
                className={"btn btn-second-action"}
                onClick={() => startNewGame()}>New Game</button>
        </div>
    );
};
export default StartGame;