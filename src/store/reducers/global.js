const INITIAL_STATE = {
  isError: false,
  isLoading: false
};

const global = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_LOADING_GLOBAL':
      return state;
    case 'SET_LOADING_GLOBAL':
      return { ...state, isLoading: !state.isLoading };
    case 'GET_ERROR_GLOBAL':
      return state;
    case 'SET_ERROR_GLOBAL':
      return { ...state, isError: !state.isError };
    default:
      return state;
  }
};

export default global;
