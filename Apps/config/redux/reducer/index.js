import {combineReducers} from 'redux';
import searchReducer from './search.js';

const reducer = combineReducers({
  search: searchReducer,
});
export default reducer;
