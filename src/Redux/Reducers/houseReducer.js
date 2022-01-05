import actionTypes from '../Constants/actionTypes';

const initialState = {
  houses: [],
};

const houseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ALL_HOUSES:
      return { ...state, houses: payload };
    default:
      return state;
  }
};

export default houseReducer;
