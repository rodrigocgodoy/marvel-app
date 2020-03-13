const requestGetMarvel = () => {
  return {
    type: 'REQUEST_GET_MARVEL'
  };
};

const requestSearchMarvel = name => {
  return {
    type: 'REQUEST_SEARCH_MARVEL',
    payload: { name }
  };
};

export default {
  requestGetMarvel,
  requestSearchMarvel
};
