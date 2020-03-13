import { takeLatest, put, call, delay } from 'redux-saga/effects';

import api from '../../services/api';

function apiGet() {
  return api.get('/v1/public/characters', {
    params: {
      ts: 1,
      apikey: 'bcd0d1ec98bea664b61eb20f626c3d6d',
      hash: '99ad9749732783208ca457dd8b2a8065',
      limit: 100,
      offset: 0
    }
  });
}

function apiSearch(name) {
  // console.log(name);
  return (
    name !== '' &&
    api.get('/v1/public/characters', {
      params: {
        ts: 1,
        apikey: 'bcd0d1ec98bea664b61eb20f626c3d6d',
        hash: '99ad9749732783208ca457dd8b2a8065',
        limit: 100,
        offset: 0,
        nameStartsWith: name
      }
    })
  );
}

function* getMarvel() {
  try {
    const response = yield call(apiGet);

    yield delay(3000);
    yield put({
      type: 'SUCCESS_GET_MARVEL',
      payload: { data: response.data.data.results }
    });
  } catch (err) {
    yield put({ type: 'FAILURE_GET_MARVEL' });
  }
}

function* searchMarvel(action) {
  try {
    let response = null;
    action.payload.name === ''
      ? (response = yield call(apiSearch, action.payload.name))
      : (response = yield call(apiSearch, action.payload.name));

    // const response = yield call(apiSearch, action.payload.name);

    yield put({
      type: 'SUCCESS_SEARCH_MARVEL',
      payload: { data: response.data.data.results }
    });
  } catch (err) {
    yield put({ type: 'FAILURE_SEARCH_MARVEL' });
  }
}

export default function* root() {
  yield takeLatest('REQUEST_GET_MARVEL', getMarvel);
  yield takeLatest('REQUEST_SEARCH_MARVEL', searchMarvel);
}
