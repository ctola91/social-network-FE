import { combineReducers } from 'redux';
import post from '../../reducers/postReducer';

const rootReducer = combineReducers({
  post,
});

export default rootReducer;
