import { ActionTypes } from '../constants/action-types';

const initialState = {
    favouriteDetail: [],
  };

export const selectedFavouriteReducer = (state =initialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.SELECTED_FAVOURITE:
        return { ...state, favouriteDetail: payload };
    //   case ActionTypes.REMOVE_SELECTED_PRODUCT:
    //     return {};
      default:
        return state;
    }
  };