import api from '../../services/api';

const getApiMarvel = () => {
  // const teste = api.characters
  //   .findAll(state.dataOpitions.findTotal, state.dataOpitions.offset)
  //   .then(res => {
  //     state.isLoading = true;
  //     data = res.data;
  //     state.isLoading = false;
  //   })
  //   .fail(err => {
  //     state.isLoading = true;
  //     state.isError = err;
  //     state.isLoading = false;
  //   });
  return {
    type: 'GET_API_MARVEL'
    // payload: teste
  };
};

const setFindTotal = () => {
  return {
    type: 'SET_FIND_TOTAL'
  };
};

const getData = () => {
  return {
    type: 'GET_DATA'
  };
};

const decrementDez = () => {
  return {
    type: 'DECREMENT_DEZ'
  };
};

export default {
  getApiMarvel,
  setFindTotal,
  getData,
  decrementDez
};
