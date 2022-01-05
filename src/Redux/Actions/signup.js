import actionTypes from '../Constants/actionTypes';

export const userSignup = (user) => ({
  type: actionTypes.USER_SIGNUP,
  payload: user,
});

export const SignupFailure = (error) => ({
  type: actionTypes.USER_SIGNUP_FAIL,
  payload: error,
});
