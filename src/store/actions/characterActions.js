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

const requestGetMarvelId = id => {
  return {
    type: 'REQUEST_GET_MARVEL_ID',
    payload: { id }
  };
};

export default {
  requestGetMarvel,
  requestSearchMarvel,
  requestGetMarvelId
};
