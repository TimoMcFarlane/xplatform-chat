export const AUTHENTICATION_INPUT_CHANGE = 'edit';
export const editInput = (name, inputValue) => {
  return {
    type: AUTHENTICATION_INPUT_CHANGE,
    field: [name],
    payload: inputValue
  };
};