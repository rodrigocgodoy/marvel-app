import api from '../../services/api';

const INITIAL_STATE = {
  data: {},
  isError: false,
  isLoading: false,
  dataOpitions: {
    findTotal: 100,
    offset: 100
  }
};

const counter = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_API_MARVEL':
      state.isLoading = true;
      api.characters
        .findAll(state.dataOpitions.findTotal, state.dataOpitions.offset)
        .then(res => {
          console.log(res.data);
          state.data = res.data;
          state.isLoading = false;
        })
        .fail(err => {
          state.isError = err;
          state.isLoading = false;
        });
      return state;
    case 'DECREMENT_UM':
      return state;
    case 'INCREMENT_DEZ':
      return state;
    case 'DECREMENT_DEZ':
      return state;
    default:
      return state;
  }
};

export default counter;
