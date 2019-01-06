import { AUTHENTICATION_INPUT_CHANGE } from "./actions";


const INITIAL_STATE = {
    username: '',
    email: '',
    password: ''
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case AUTHENTICATION_INPUT_CHANGE:
    return {
      ...state,
      [action.field]: action.payload
    }
    default:
      return state;
  }
};