import {winnersAPI} from "../api/api";

const GET_WINNERS = 'GET_WINNERS';
const WRITE_WINNER = 'WRITE_WINNER';


const initialState = {
    winners: [
        {
            name: "Alex", score: 238,
        },
        {
            name: "Santorini", score: 118,
        }
    ]
};

const winnersReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_WINNERS: {
            return {...state};
        }
        case WRITE_WINNER: {
            return {
                ...state,
                winners: [
                    ...state.winners,
                    {
                        id: action.winner.id,
                        name: action.winner.name,
                        score: action.winner.score
                    }
                ]
            };

        }
        default:
            return state;
    }
};


const getWinners = () => {
    return {
        type: GET_WINNERS,
    };
};

export const getAllWinners = () => {
    return (dispatch) => {
        dispatch(getWinners);
    };
};

const writeWinnerOnTable = (winner) => {
    return {
        type: WRITE_WINNER, winner
    };
};

export const writeWinner = (winner) => {
    return async (dispatch) => {
        try {
            let response = await winnersAPI.setWinner(winner)
            dispatch(writeWinnerOnTable(response.config.data));
            // dispatch(writeWinnerOnTable(winner));
        } catch (e) {
            console.log('Внимание! ', e);
        }
    };
};


export default winnersReducer;


