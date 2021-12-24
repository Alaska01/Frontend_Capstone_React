import { combineReducers } from 'redux';
import { houseReducer } from './houseReducer';
import { selectedHouseReducer } from './houseSelectedReducer';
import {favouriteReducer } from './favouriteReducer'
// import { selectedReducer } from './favouriteSelectedReducer';
import { selectedFavouriteReducer } from './favouriteSelectedReducer';

const reducers = combineReducers({
  allHouses: houseReducer,
  house: selectedHouseReducer,
  allFavourites: favouriteReducer,
  favourite: selectedFavouriteReducer
});

export default reducers;
