import { ActionTypes } from "../constants/action-types";

const initialState = {
    houses: [ ]
};

//  The arg (state, action) destruction action { type, payload}
export const houseReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.SET_PRODUCTS: 
            return {...state, products: payload };
        default:
            return state;
    }
}