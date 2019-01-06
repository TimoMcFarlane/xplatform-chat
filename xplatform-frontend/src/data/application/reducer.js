import { SET_LOADING, TOGGLE_SIDE_MENU } from "./actions";
import { Animated } from 'react-native';

const INITIAL_STATE = {
    applicationInitialized: false,
    loading: false,
    isLoggedIn: true,
    applicationError: false,
    sideMenuValue: new Animated.Value(-200),
    sideMenuOpen: false
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case TOGGLE_SIDE_MENU:
      return {
        ...state,
        sideMenuOpen: action.payload.open,
      }
    default:
      return state;
  }
};