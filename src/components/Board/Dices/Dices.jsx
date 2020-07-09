import React from "react";

const Dices = (props) => {
    const onPickDice = (diceId) => {
        props.getPickDice(diceId, props.currentRoll, props.maxRoll, props.dicesValue[diceId].checked);
    };

    return (
            <div className="result" >
                {Object.keys(props.dicesValue).map((dice, index) =>
                    <div key={index}
                         className={`dice ${props.dicesValue[dice].checked ? 'active' : ' '}`}
                         onClick={() => onPickDice(props.dicesValue[dice].id)}
                    >{props.dicesValue[dice].value}
                    </div>
                )}

                {props.currentRoll > 0 ? <div className="result-block">бросок {props.currentRoll }</div> : null}
                {props.messageAboutStep.length > 0
                    ? <div className={"messageAboutStep"}> {props.messageAboutStep} </div>
                    : null}
            </div>
    );
};

export default Dices;