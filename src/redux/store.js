import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import NumberStore from './reducers/number';
const rootReducer =  combineReducers({
    NumberStore
});

 const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;