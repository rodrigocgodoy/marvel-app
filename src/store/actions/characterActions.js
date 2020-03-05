const getApiMarvel = () => {
  return {
    type: 'GET_API_MARVEL'
  };
};

const decrementUm = () => {
  return {
    type: 'DECREMENT_UM'
  };
};

const incrementDez = () => {
  return {
    type: 'INCREMENT_DEZ'
  };
};

const decrementDez = () => {
  return {
    type: 'DECREMENT_DEZ'
  };
};

export default {
  getApiMarvel,
  decrementUm,
  incrementDez,
  decrementDez
};
