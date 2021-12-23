import { ActionTypes } from '../constants/action-types';

const initialState = {
    houseDetail: [],
  };

export const selectedHouseReducer = (state =initialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.SELECTED_HOUSE:
        return { ...state, houseDetail: payload };
    //   case ActionTypes.REMOVE_SELECTED_PRODUCT:
    //     return {};
      default:
        return state;
    }
  };