import  {combineReducers} from 'redux';
import postReducers from './postsReducers';
import userReducers from './usersReducers'
export default combineReducers({
    posts:postReducers,
    users:userReducers
});