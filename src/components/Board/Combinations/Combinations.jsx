import React from "react";
import * as R from "ramda";
import {getResultForCurrentCombination, getSubTotal, getTotal} from "../../../math/math";


const Combinations = (props) => {

    const onWriteValue = (combinationId) => {

        const hasValue = (dice) => dice.value;
        let dicesWithValue =R.filter(hasValue, props.dicesValue);
        const canWrite = R.isEmpty(dicesWithValue);
        if (props.currentRoll > 0) {
            if (props.combinations[combinationId].canChange && !canWrite) {
                let resultOfCurrent = getResultForCurrentCombination(props.combinations[combinationId].type,
                    props.dicesValue, props.combinations);
                let resultOfSubTotal = 0;
                if (combinationId < 7) {
                    resultOfSubTotal = getResultForCurrentCombination(props.combinations[combinationId].type,
                        props.dicesValue, props.combinations);
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
        <div className="combination">
            {Object.keys(props.combinations).map((combination, index) =>
                <div className={'combination-item'} key={index}>
                    <span className={"combination-item-name"}>{props.combinations[combination].name}</span>
                    <span
                        className={'combination-result'}
                        onClick={() => onWriteValue(props.combinations[combination].id)}
                    >
                               <div className={'value'}> {props.combinations[combination].value}</div>
                                <div className={'possible-value'}>
                                    {props.combinations[combination].value
                                    === null && props.combinations[combination].possibleValue}
                                </div>
                            </span>

                </div>)}

        </div>
    );
};

export default Combinations;