import { ActionTypes } from '../constants/action-types';    

export const setHouses = (houses) => {
    return {
        type: ActionTypes.SET_HOUSES,
        payload: products,
    };
};

export const selectedHouse = (house) => {
    return {
        type: ActionTypes.SELECTED_HOUSE,
        payload: product,
    };
};

export const removeSelectedHouse = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_HOUSE,
    };
};