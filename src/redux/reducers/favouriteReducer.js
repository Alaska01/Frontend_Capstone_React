import { ActionTypes } from '../constants/action-types';

const initialState = {
  favourites: [],
};

//  The arg (state, action) destruction action { type, payload}
export const favouriteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_FAVOURITES:
      return { ...state, favourites: payload };
    default:
      return state;
  }
};
