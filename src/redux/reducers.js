import {combineReducers} from 'redux';
import boardReducer from './boardReducer';
import dicesReducer from "./dicesReducer";
import winnersReducer from "./winnersReducer";
import settingReducer from "./settings/settingReducer";

export default  combineReducers({
   board: boardReducer,
   dices: dicesReducer,
   winners: winnersReducer,
   settings: settingReducer
});