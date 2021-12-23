import { combineReducers } from 'redux';
import { houseReducer } from './houseReducer';
import { selectedHouseReducer } from './houseSelectedReducer';

const reducers = combineReducers({
  allHouses: houseReducer,
  house: selectedHouseReducer,
});

export default reducers;
