import { combineReducers } from 'redux';
import todos from './todos';
import items from './items';

const rootReducer = combineReducers({
    items
});

export default rootReducer;
