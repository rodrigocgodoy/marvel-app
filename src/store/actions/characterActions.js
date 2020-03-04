const incrementUm = () => {
  return {
    type: 'INCREMENT_UM'
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
  incrementUm,
  decrementUm,
  incrementDez,
  decrementDez
};
