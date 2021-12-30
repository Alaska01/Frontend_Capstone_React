import actionTypes from '../Constants/actionTypes';

export const userLogin = (user) => ({
  type: actionTypes.USER_LOGIN,
  payload: user,
});

export const loginFailure = (error) => ({
  type: actionTypes.USER_LOGIN_FAIL,
  payload: error,
});
