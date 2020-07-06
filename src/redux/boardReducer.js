import * as R from 'ramda'


const WRITE_RESULT = 'WRITE_RESULT'
const RESET_POSSIBLE_VALUES = 'RESET_POSSIBLE_VALUES';
const GET_TOTAL_SCORE = 'GET_TOTAL_SCORE';
const MAKE_TABU_FOR_CHANGE = 'MAKE_TABU_FOR_CHANGE';
const WRITE_POSSIBLE_VALUE = 'WRITE_POSSIBLE_VALUE';

const ONES = 'ONES';
const TWOES = 'TWOES';
const THREES = 'THREES';
const FOURS = 'FOURS';
const FIVES = 'FIVES';
const SIXES= 'SIXES';
const BONUS = 'BONUS';
const THREE_OF_A_KIND= 'THREE_OF_A_KIND';
const FOUR_OF_A_KIND= 'FOUR_OF_A_KIND';
const FULL_HOUSE= 'FULL_HOUSE';
const SMALL_STRAIGHT = 'SMALL_STRAIGHT';
const LARGE_STRAIGHT= 'LARGE_STRAIGHT';
const YACHT= 'YACHT';
const CHANCE = 'CHANCE';
 const SUB_TOTAL = 'SUB_TOTAL';
const TOTAL_SCORE= 'TOTAL_SCORE';
const START_NEW_GAME = '/BOARD/START_NEW_GAME';


const initialState = {
    combinations: {
        '1': { id: 1, value: null, possibleValue: null,  name: 'Ones', type: ONES, canChange: true},
        '2': { id: 2, value: null, possibleValue: null, name: 'Twoes', type: TWOES, canChange: true},
        '3': {id: 3, value: null, possibleValue: null,name: 'Threes', type: THREES, canChange: true},
        '4': {id: 4, value: null, possibleValue: null, name: 'fours', type: FOURS, canChange: true},
        '5': {id: 5, value: null, possibleValue: null, name: 'fours', type: FIVES, canChange: true},
        '6': {id: 6, value: null, possibleValue: null, name: 'Sixes', type: SIXES, canChange: true},
        '7': {id: 7, value: null, possibleValue: null,name: 'Bonus', type: BONUS, canChange: false},
        '8': {id: 8, value: null, possibleValue: null,name: 'Three of a kind', type: THREE_OF_A_KIND, canChange: true},
        '9':{id: 9, value: null,possibleValue: null, name: 'Four of a kind', type: FOUR_OF_A_KIND, canChange: true},
        '10': {id: 10, value: null,possibleValue: null,name: 'Full house', type: FULL_HOUSE, canChange: true},
        '11':{id: 11, value: null, possibleValue: null, name: 'Small Straight', type: SMALL_STRAIGHT, canChange: true},
        '12':{id: 12, value: null, possibleValue: null,name: 'Large Straight', type: LARGE_STRAIGHT, canChange: true},
        '13':{id: 13, value: null,possibleValue: null, name: 'Yacht', type: YACHT, canChange: true},
        '14': {id: 14, value: null, possibleValue: null,name: 'Chance', type: CHANCE, canChange: true},
        '15': {id: 15, value: null, possibleValue: null,name: 'Sub Total', type: SUB_TOTAL, canChange: false},
        '16':{id: 16, value: null, possibleValue: null,name: 'Total Score', type: TOTAL_SCORE, canChange: false},
    }
}

const startState = {
    combinations: {
        '1': { id: 1, value: null, possibleValue: null,  name: 'Ones', type: ONES, canChange: true},
        '2': { id: 2, value: null, possibleValue: null, name: 'Twoes', type: TWOES, canChange: true},
        '3': {id: 3, value: null, possibleValue: null,name: 'Threes', type: THREES, canChange: true},
        '4': {id: 4, value: null, possibleValue: null, name: 'fours', type: FOURS, canChange: true},
        '5': {id: 5, value: null, possibleValue: null, name: 'fours', type: FIVES, canChange: true},
        '6': {id: 6, value: null, possibleValue: null, name: 'Sixes', type: SIXES, canChange: true},
        '7': {id: 7, value: null, possibleValue: null,name: 'Bonus', type: BONUS, canChange: false},
        '8': {id: 8, value: null, possibleValue: null,name: 'Three of a kind', type: THREE_OF_A_KIND, canChange: true},
        '9':{id: 9, value: null,possibleValue: null, name: 'Four of a kind', type: FOUR_OF_A_KIND, canChange: true},
        '10': {id: 10, value: null,possibleValue: null,name: 'Full house', type: FULL_HOUSE, canChange: true},
        '11':{id: 11, value: null, possibleValue: null, name: 'Small Straight', type: SMALL_STRAIGHT, canChange: true},
        '12':{id: 12, value: null, possibleValue: null,name: 'Large Straight', type: LARGE_STRAIGHT, canChange: true},
        '13':{id: 13, value: null,possibleValue: null, name: 'Yacht', type: YACHT, canChange: true},
        '14': {id: 14, value: null, possibleValue: null,name: 'Chance', type: CHANCE, canChange: true},
        '15': {id: 15, value: null, possibleValue: null,name: 'Sub Total', type: SUB_TOTAL, canChange: false},
        '16':{id: 16, value: null, possibleValue: null,name: 'Total Score', type: TOTAL_SCORE, canChange: false},
    }
}

const boardReducer = (state = initialState, action) => {

    switch(action.type) {

        case WRITE_RESULT:
            if (state.combinations[action.combinationId].canChange) {
                return R.assocPath(
                    ['combinations', action.combinationId, 'value'],
                    action.result,
                    state
                );
            }
            return {...state}
            // message
        case GET_TOTAL_SCORE: {
            return R.assocPath(
                ['combinations', action.id,  'value'],
                action.totalValue,
                state
            );
        }
        case MAKE_TABU_FOR_CHANGE: {
            return R.assocPath(
                ['combinations', action.combinationId, 'canChange'],
                action.isChange,
                state
            );
        }
        case WRITE_POSSIBLE_VALUE: {
            return {
                ...state,
                combinations: action.combinations
            }
        }
        case RESET_POSSIBLE_VALUES: {
            return R.over(
                R.lensProp('combinations'),
                R.map(R.assoc('possibleValue', null)),
                state
            );
        }
        case START_NEW_GAME: {
            return {
                ...startState
            }
        }
        default:
            return state
    }
}

const getWriteResult = (result, combinationId) => {
    return {type: WRITE_RESULT, result, combinationId};
}

const writePossibleValue = (combinations) => {
    return {type: WRITE_POSSIBLE_VALUE, combinations}
}


export const resetPossibleValues = () => {
    return {type: RESET_POSSIBLE_VALUES}
}

const makeTabuForChange = (combinationId, isChange) => {
    return {type: MAKE_TABU_FOR_CHANGE, combinationId, isChange}
}
export const writeResult = (result, combinationId) => {
    return (dispatch) => {
        dispatch(getWriteResult(result, combinationId));
        dispatch(makeTabuForChange(combinationId, false));
    }
}
const TotalScore = (totalValue, id) => {
    return {type: GET_TOTAL_SCORE, totalValue, id}
}

export const getTotalScore = (totalValue, subTotalValue, bonusTotal) => {

    return (dispatch) => {
        dispatch(TotalScore(subTotalValue, 15));
        dispatch(TotalScore(totalValue, 16));
        dispatch(TotalScore(bonusTotal, 7));
    }

}


export const getPossibleValue = (combinations) => {
    return (dispatch) => {
        // debugger
        dispatch(resetPossibleValues());
        dispatch(writePossibleValue(combinations))

    }
}

export const startNewGame = () => {
    return {type: START_NEW_GAME}
}



export default boardReducer;





// old writeresult as array
// return {
//     ...state,
//     combinations: state.combinations.map((combination) => {
//       if (combination.id - 1 === action.combinationId) {
//         return { ...combination, value: action.result };
//       }
//       return combination;
//     }),
// }