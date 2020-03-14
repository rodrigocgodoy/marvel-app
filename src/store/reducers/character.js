const INITIAL_STATE = {
  data: [],
  dataUser: [],
  dataSeries: [],
  dataOpitions: {
    findTotal: 20,
    offset: 0
  },
  error: false,
  loading: false
};

const character = async (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'REQUEST_GET_MARVEL':
      return { ...state, loading: true };
    case 'SUCCESS_GET_MARVEL':
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data
      };
    case 'FAILURE_GET_MARVEL':
      return {
        ...state,
        data: [],
        loading: false,
        error: true
      };
    case 'REQUEST_GET_MARVEL_ID':
      return { ...state, loading: true };
    case 'SUCCESS_GET_MARVEL_ID':
      return {
        ...state,
        loading: false,
        error: false,
        dataUser: action.payload.dataUser,
        dataSeries: action.payload.dataSeries
      };
    case 'FAILURE_GET_MARVEL_ID':
      return {
        ...state,
        data: [],
        loading: false,
        error: true
      };
    case 'REQUEST_SEARCH_MARVEL':
      return { ...state, loading: true };
    case 'SUCCESS_SEARCH_MARVEL':
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data
      };
    case 'FAILURE_SEARCH_MARVEL':
      return {
        ...state,
        data: [],
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default character;
