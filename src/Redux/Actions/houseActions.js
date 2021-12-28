import actionTypes from '../Constants/actionTypes';

export const allHouses = (houses) => ({
  type: actionTypes.ALL_HOUSES,
  payload: houses,
});

export const singleHouse = (house) => ({
  type: actionTypes.SINGLE_HOUSE,
  payload: house,
});
