import React from "react";
import Board from "./Board";
import {connect} from 'react-redux'
import { compose } from "redux";
import {writeResult, resetPossibleValues, getTotalScore, getPossibleValue} from "../../redux/boardReducer";
import {getMakeRoll, getPickDice, newMessageAboutStep, getResetDices} from "../../redux/dicesReducer";

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
        getResetDices
    }),
)(BoardContainer);

