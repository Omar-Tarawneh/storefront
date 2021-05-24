import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productsReducer from './products-reducer.js';
import catogeriesReducer from './catogeries-reducer.js';
import cartReducer from './cart-reducer.js';

const reducers = combineReducers({
  products: productsReducer,
  catogeries: catogeriesReducer,
  cart: cartReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
