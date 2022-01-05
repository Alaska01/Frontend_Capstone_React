import reducer from '../Redux/Reducers/houseReducer';
import actionTypes from '../Redux/Constants/actionTypes';
import houses from './House.test';

describe('House Reducer', () => {
  it('Should return default state', () => {
    const newState = reducer(undefined, {});
    expect(newState).not.toEqual(undefined);
  });

  it('Should return new state if action type is recieved', () => {
    const newState = reducer(undefined, {
      type: actionTypes.ALL_HOUSES,
      payload: houses,
    });

    expect(newState).toEqual({ houses });
  });

  it('Should return new state if action type is recieved', () => {
    const newState = reducer(undefined, {
      type: actionTypes.ALL_HOUSES,
      payload: houses,
    });

    expect(newState).not.toEqual(null);
  });
});
