import { ActionTypes } from '../constants/action-types';

export const setHouses = (houses) => ({
  type: ActionTypes.SET_HOUSES,
  payload: houses,
});

export const selectedHouse = (house) => ({
  type: ActionTypes.SELECTED_HOUSE,
  payload: house,
});

export const removeSelectedHouse = () => ({
  type: ActionTypes.REMOVE_SELECTED_HOUSE,
});
