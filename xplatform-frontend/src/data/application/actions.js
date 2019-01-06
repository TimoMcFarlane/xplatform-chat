// const values for actions
export const SET_LOADING = 'loading';
export const TOGGLE_SIDE_MENU = 'toggle';
export const setLoading = (val) => {
  return {
    type: SET_LOADING,
    payload: val
  };
};

export const toggleSideMenu = (val) => {
  return {
    type: TOGGLE_SIDE_MENU,
    payload: {
      open: val
    }
  }
}

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    // Asynchronous action bollocs using redux thunk
    // redux thunk will recognize it when we return a function
    // and call it using dispatch
    // dispatch({type:'something', payload: data});
  };
};