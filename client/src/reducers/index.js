//index.js will combine all the reducers into this one file
import { combineReducers } from 'redux';
import currentGame from './currentGame';

const rootReducer = combineReducers({
  currentGame,
})

export default 