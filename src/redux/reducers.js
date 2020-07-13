import {combineReducers} from 'redux';
import boardReducer from './boardReducer';
import dicesReducer from "./dicesReducer";
import winnersReducer from "./winnersReducer";

export default  combineReducers({
   board: boardReducer,
   dices: dicesReducer,
   winners: winnersReducer
})