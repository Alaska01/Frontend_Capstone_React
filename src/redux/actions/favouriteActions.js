import { ActionTypes } from '../constants/action-types';

export const setFavourites = (favourites) => ({
  type: ActionTypes.SET_FAVOURITES,
  payload: houses,
});

export const selectedFavourite = (favourite) => ({
  type: ActionTypes.SELECTED_FAVOURITE,
  payload: house,
});

export const removeSelectedFavourite = () => ({
  type: ActionTypes.REMOVE_SELECTED_FAVOURITE,
});
