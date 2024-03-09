import { createStore, applyMiddleware } from 'redux';
import {thunk,withExtraArgument} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reduxfile/CombineReducer'

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store;
