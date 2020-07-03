import {combineReducers} from 'redux'
import boardReducer from './boardReducer';
import dicesReducer from "./dicesReducer";


export default  combineReducers({
   board: boardReducer,
   dices: dicesReducer,
})