import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import * as reducers from './reducers';
//crea el store con los reducers de ./reducers
export default createStore(combineReducers(reducers),applyMiddleware(thunk));
