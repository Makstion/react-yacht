import React from "react";
import Board from "./Board";
import {connect} from 'react-redux'
import { compose } from "redux";
import {writeResult, resetPossibleValues, getTotalScore, getPossibleValue, startNewGame} from "../../redux/boardReducer";
import {getMakeRoll, getPickDice, newMessageAboutStep, getResetDices} from "../../redux/dicesReducer";
import {writeWinner} from "../../redux/winnersReducer";

const BoardContainer = (props) => {

    return <Board
        combinations={props.combinations}
        dices = {props.dices}
        writeResult={props.writeResult}
        resetPossibleValues={props.resetPossibleValues}
        getTotalScore={props.getTotalScore}
        getPossibleValue={props.getPossibleValue}
        getPickDice = {props.getPickDice}
        getMakeRoll = {props.getMakeRoll}
        newMessageAboutStep = {props.newMessageAboutStep}
        getResetDices = {props.getResetDices}
        startNewGame = {props.startNewGame}
        writeWinner={props.writeWinner}
    />
}


const mapStateToProps = (state) => {
    return {
        combinations: state.board.combinations,
        dices: state.dices,
    }
}

export default compose(
    connect(mapStateToProps, {
        writeResult,
        resetPossibleValues,
        getTotalScore,
        getPossibleValue,
        getPickDice,
        getMakeRoll,
        newMessageAboutStep,
        getResetDices,
        startNewGame,
        writeWinner
    }),
)(BoardContainer);

