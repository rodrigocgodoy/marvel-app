const getLoadingGlobal = () => {
  return {
    type: 'GET_LOADING_GLOBAL'
  };
};

const setLoadingGlobal = () => {
  return {
    type: 'SET_LOADING_GLOBAL'
  };
};

const getErrorGlobal = () => {
  return {
    type: 'GET_ERROR_GLOBAL'
  };
};

const setErrorGlobal = () => {
  return {
    type: 'SET_ERROR_GLOBAL'
  };
};

export default {
  getLoadingGlobal,
  setLoadingGlobal,
  getErrorGlobal,
  setErrorGlobal
};
