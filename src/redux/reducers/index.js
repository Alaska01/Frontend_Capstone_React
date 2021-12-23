import { combineReducers } from 'redux';
import { houseReducer, selectedHouseReducer } from './houseReducer';

const reducers = combineReducers({
  allHouses: houseReducer,
  house: selectedHouseReducer,
});

export default reducers;
