const counter = (state = 1, action) => {
  switch (action.type) {
    case 'INCREMENT_UM':
      return state + 1;
    case 'DECREMENT_UM':
      return state - 1;
    case 'INCREMENT_DEZ':
      return state + 10;
    case 'DECREMENT_DEZ':
      return state - 10;
    default:
      return state;
  }
};

export default counter;
