import actionTypes from '../Constants/actionTypes';

export const addfavourite = (favourite) => ({
  type: actionTypes.ADD_FAVOURITES,
  payload: favourite,
});

export const fetchFavourites = (favourites) => ({
  type: actionTypes.FETCH_FAVOURITES,
  payload: favourites,
});
