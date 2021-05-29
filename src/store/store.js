import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import productsReducer from './products-reducer.js';
import catogeriesReducer from './catogeries-reducer.js';
import cartReducer from './cart-reducer.js';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  products: productsReducer,
  catogeries: catogeriesReducer,
  cart: cartReducer,
});

const store = () => {
  return createStore(reducers, applyMiddleware(thunk));
};

export default store();
