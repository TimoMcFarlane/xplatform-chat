import { combineReducers } from 'redux';
import ApplicationReducer from './application/reducer';
import AuthenticationReducer from './authenticationForm/reducer';
export default combineReducers({
  application: ApplicationReducer,
  authentication: AuthenticationReducer
});