import React, {useState} from "react";
import './Board.scss';
import * as R from "ramda";
import Dices from "./Dices/Dices";
import Combinations from "./Combinations/Combinations";
import StartGame from "./StartGame/StartGame";


const Board = (props) => {

    let state = props.dices;

    const onRollingDices = (dices) => {
        const isChecked = (dices) => dices.checked;
        let dicesWithChecked =R.filter(isChecked, dices);
        const canRoll = R.isEmpty(dicesWithChecked);

        if (canRoll) {
            props.newMessageAboutStep('Выберите кости или запишите результат!');
        } else if (state.currentRoll < state.maxRoll && state.currentRoll >= 0) {
            props.getMakeRoll(dices, state.currentRoll, props.combinations);
            props.newMessageAboutStep('Хороший бросок. Запишем или кидаем дальше?!');

            if (state.currentRoll + 1 === state.maxRoll) {
            props.newMessageAboutStep('Это был последний бросок, запишите результат');
            }
        } else if (state.currentRoll === state.maxRoll) {
            props.newMessageAboutStep('Бросков больше нет, запишите результат');
        }
    };

    const isGameFinished = (combinations) => {
        let sumOfCanChange = 0;
        for (let i = 1; i < 16; i++) {
            if (combinations[i].canChange) {
                sumOfCanChange = sumOfCanChange + 1;
            }
        }
        if (sumOfCanChange > 0) {
            console.log(sumOfCanChange);
            return false;
        }
        console.log('lol ', sumOfCanChange);
        return true;
    };

    const onWriteResult = () => {
            console.log(isGameFinished(props.combinations));
        if (isGameFinished(props.combinations)) {
            if (name.length < 1) {
                props.newMessageAboutStep('Введите ваше имя');
            }
            setId(id +1);
            let result = {name: name, score: props.combinations[16].value, id: id};
            props.writeWinner(result);
        }
        props.newMessageAboutStep('Чтобы записать результат, завершите игру');
    };
    const [name, setName] = useState('');
    const [id, setId] = useState(0);

    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
            <div className="board-wrapper page">
                <h2
                    className="page-title"
                >Board game</h2>
                <StartGame
                    getResetDices={props.getResetDices}
                    startNewGame={props.startNewGame}
                />
                <div>
                    <button
                        className="btn btn-second-action"
                        onClick={() => onWriteResult()}
                        >
                        Write Result
                    </button>
                </div>
                <div>
                    <input
                        className="input-name"
                        type="text"
                        name="name"
                        placeholder="Введите ваше имя"
                        value={state.value}
                        onChange={handleChange}
                    />
                </div>
                <div className="board-table">
                    <Dices
                        dicesValue={props.dices.dicesValue}
                        currentRoll={props.dices.currentRoll}
                        maxRoll={props.dices.maxRoll}
                        getPickDice={props.getPickDice}
                        messageAboutStep={props.dices.messageAboutStep}
                    />
                    <button
                        className={"btn btn-main-action"}
                        onClick={() => onRollingDices(state.dicesValue)}>ROLL!</button>

                    <Combinations
                        dices = {props.dices}
                        dicesValue={props.dices.dicesValue}
                        currentRoll={props.dices.currentRoll}
                        maxRoll={props.dices.maxRoll}
                        messageAboutStep={props.dices.messageAboutStep}
                        combinations={props.combinations}
                        getTotalScore={props.getTotalScore}
                        resetPossibleValues={props.resetPossibleValues}
                        getResetDices={props.getResetDices}
                        writeResult={props.writeResult}
                    />

                </div>
            </div>
    );
};

export default Board;