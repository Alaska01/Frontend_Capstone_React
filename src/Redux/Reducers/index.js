import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import houseReducer from './houseReducer';
import detailReducer from './detailReducer';
import signupReducer from './signupReducer';
import authenticateReducer from './authenticate';
import loginReducer from './loginReducer';
import fetchFavReducer from './fetchFavReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favourites'],
};

const rootReducer = combineReducers({
  house: houseReducer,
  detail: detailReducer,
  signup: signupReducer,
  authenticate: authenticateReducer,
  login: loginReducer,
  favourites: fetchFavReducer,
});

export default persistReducer(persistConfig, rootReducer);
