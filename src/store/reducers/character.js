import api from '../../services/api';

const INITIAL_STATE = {
  data: [],
  isError: false,
  isLoading: false,
  dataOpitions: {
    findTotal: 100,
    offset: 100
  }
};

const character = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_API_MARVEL':
      api.characters
        .findAll(state.dataOpitions.findTotal, state.dataOpitions.offset)
        .then(res => {
          state.isLoading = true;
          state.data = res.data;
          state.isLoading = false;
        })
        .fail(err => {
          state.isLoading = true;
          state.isError = err;
          state.isLoading = false;
        });
      // return { ...state, data: [...state.data, action.payload] };
      return state;
    case 'SET_FIND_TOTAL':
      state.dataOpitions.findTotal = 300;
      return state;
    case 'GET_DATA':
      return state;
    case 'DECREMENT_DEZ':
      return state;
    default:
      return state;
  }
};

export default character;
