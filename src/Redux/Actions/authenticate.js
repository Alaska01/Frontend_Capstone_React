import actionTypes from '../Constants/actionTypes';

const authenticate = (user) => ({
  type: actionTypes.AUTHENTICATE,
  payload: user,
});

export default authenticate;
