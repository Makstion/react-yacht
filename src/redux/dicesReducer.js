import * as R from 'ramda'
import {getResultForAllCombination, makeNewDiceValue} from './../math/math'
import {getPossibleValue, resetPossibleValues} from "./boardReducer";


const MAKE_ROLL = 'MAKE_ROLL';
const PICK_DICE = 'PICK_DICE';
const NEW_MESSAGE_ABOUT_STEP = 'NEW_MESSAGE_ABOUT_STEP'
const RESET_DICES = 'RESET_DICES';
const RESET_CURRENT_ROLL = 'RESET_CURRENT_ROLL';
const MAKE_ALL_DICES_CHECKED = 'MAKE_ALL_DICES_CHECKED'


const initialState = {
    dicesValue: {
        '1':{ id: 1, value: null, checked: true},
        '2':{id: 2, value: null, checked: true},
        '3':{id: 3, value: null,checked: true},
        '4':{id: 4, value: null,checked: true},
        '5':{id: 5, value: null, checked: true}
    },
    currentRoll: 0,
    maxRoll: 3,
    messageAboutStep: 'Кидайте кости',
}




const dicesReducer = (state = initialState, action) => {
    switch(action.type) {
        case MAKE_ROLL: {
            return {
                ...state,
                dicesValue: action.newDicesValue,
                currentRoll: action.newCurrentRoll
            }
        }
        case PICK_DICE: {
            // let checked = !state.dicesValue[action.diceId].checked;
            return R.assocPath(
                ['dicesValue', action.diceId, 'checked'],
                action.checked,
                state
            );
        }
        case NEW_MESSAGE_ABOUT_STEP: {
            return {
                ...state,
                messageAboutStep: action.newMessage
            }
        }
        case RESET_DICES: {
            return R.over(
                R.lensProp('dicesValue'),
                R.map(R.assoc('value', null)),
                state
            );
        }
        case MAKE_ALL_DICES_CHECKED: {
            return R.over(
                R.lensProp('dicesValue'),
                R.map(R.assoc('checked', true)),
                state
            );
        }
        case RESET_CURRENT_ROLL: {
            return {
                ...state,
                currentRoll: 0
            }
        }
        default:
            return state
    }
}

const pickDice = (diceId, checked) => {
    return {type: PICK_DICE, diceId, checked}
}
export const getPickDice = (diceId, currentRoll, maxRoll, checked) => {
    return (dispatch) => {
        if (currentRoll < maxRoll && currentRoll > 0) {
            dispatch(pickDice(diceId, !checked));
        }
    }
}

const makeRoll = (newDicesValue, newCurrentRoll) => {
    return {
        type: MAKE_ROLL,newDicesValue,newCurrentRoll
    }
}
const writeMessageAboutStep = (newMessage) => {
    return {
        type: NEW_MESSAGE_ABOUT_STEP, newMessage
    }
}

export const newMessageAboutStep = (newMessage) => {
    return (dispatch) => {
        dispatch(writeMessageAboutStep(newMessage));
    }
}

const resetDices = () => {
    return {
        type: RESET_DICES
    }
}

const makeAllDicesChecked = () => {
    return {
        type: MAKE_ALL_DICES_CHECKED
    }

}

const resetCurrentRoll = () => {
    return {
        type: RESET_CURRENT_ROLL
    }
}

export const getResetDices = () => {
    return (dispatch) => {
        dispatch(resetDices());
        dispatch(resetCurrentRoll());
        dispatch(makeAllDicesChecked());
    }
}


export const getMakeRoll = (dicesValue, currentRoll, combinations) => {
    return (dispatch) => {
         let newDicesValue = makeNewDiceValue(dicesValue);

         dispatch(resetPossibleValues())
         dispatch(makeRoll(newDicesValue, currentRoll +1))
        dispatch(getPossibleValue(getResultForAllCombination(newDicesValue, combinations)))
    }
}

export default dicesReducer;

