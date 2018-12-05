import { combineReducers } from 'redux';
import Names from './Names';
import Title from './Title';


const rootReducer = combineReducers({
    Names: Names,
    Title: Title
});

export default rootReducer;