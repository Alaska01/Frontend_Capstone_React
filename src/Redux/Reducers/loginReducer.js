import actionTypes from '../Constants/actionTypes';

const initialState = {
  user: {},
};

const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.USER_LOGIN:
      return {
        user: payload,
      };

    default:
      return state;
  }
};

export default loginReducer;
