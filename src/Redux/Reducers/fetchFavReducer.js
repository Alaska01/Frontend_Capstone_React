import actionTypes from '../Constants/actionTypes';

const initialState = {
  favourite: [],
};

const fetchFavReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_FAVOURITES:
      return {
        ...state,
        favourite: payload,
      };

    default:
      return state;
  }
};

export default fetchFavReducer;
