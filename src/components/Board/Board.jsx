import React from "react";
import {
    getResultForCurrentCombination,
    getSubTotal,
    getTotal,
} from "../../math/math";
import './Board.scss';
import * as R from "ramda";
import Dices from "./Dices/Dices";
import Combinations from "./Combinations/Combinations";
import axios from 'axios';



const Board = (props) => {

    let state = props.dices;

    const startNewGame = () => {
        const isMakeStart = window.confirm("Начать новую игру?");

        if (isMakeStart) {
            props.startNewGame();
            props.getResetDices();
        }
    };

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


    const onWriteValue = (combinationId) => {

        const hasValue = (dices) => dices.value;
        let dicesWithValue =R.filter(hasValue, props.dices.dicesValue);
        const canWrite = R.isEmpty(dicesWithValue);

        if (state.currentRoll > 0) {
            if (props.combinations[combinationId].canChange && !canWrite) {

                let resultOfCurrent = getResultForCurrentCombination(props.combinations[combinationId].type,
                    state.dicesValue, props.combinations);
                let resultOfSubTotal = 0;
                if (combinationId < 7) {
                    resultOfSubTotal = getResultForCurrentCombination(props.combinations[combinationId].type,
                        state.dicesValue, props.combinations);
                }
                props.writeResult(resultOfCurrent, combinationId);
                let totalValue = getTotal(props.combinations) + resultOfCurrent;
                let subTotal = getSubTotal(props.combinations) + resultOfSubTotal;
                let bonusTotal = 0;
                if (subTotal > 62) {
                    bonusTotal = 35;
                }
                props.getTotalScore(totalValue, subTotal, bonusTotal);
                props.resetPossibleValues();
                props.getResetDices();

            } else if (!props.combinations[combinationId].canChange) {
                props.newMessageAboutStep('Выберите другое значение');
            } else if (canWrite) {
                props.newMessageAboutStep('Новый ход! Кидайте кости пожалуйста!');
            }
        }
    };
    return (
            <div className="board-wrapper page">
                <h2 className="page-title">Board game</h2>
                <div>
                    <button
                        className={"btn btn-second-action"}
                        onClick={() => startNewGame()}>New Game</button>
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
                        dicesValue={props.dices.dicesValue}
                        maxRoll={props.dices.maxRoll}
                        messageAboutStep={props.dices.messageAboutStep}
                        combinations={props.combinations}

                    />

                </div>
            </div>
    );
};

export default Board;