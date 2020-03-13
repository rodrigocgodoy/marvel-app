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

    yield delay(1000);
    yield put({
      type: 'SUCCESS_GET_MARVEL',
      payload: { data: response.data.data.results }
    });
  } catch (err) {
    yield put({ type: 'FAILURE_GET_MARVEL' });
  }
}

function apiGetId(id) {
  return api.get(`/v1/public/characters/${id}`, {
    params: {
      ts: 1,
      apikey: 'bcd0d1ec98bea664b61eb20f626c3d6d',
      hash: '99ad9749732783208ca457dd8b2a8065'
    }
  });
}

function apiGetSeriesId(id) {
  return api.get(`/v1/public/characters/${id}/series`, {
    params: {
      ts: 1,
      apikey: 'bcd0d1ec98bea664b61eb20f626c3d6d',
      hash: '99ad9749732783208ca457dd8b2a8065'
    }
  });
}

function* getMarvelId(action) {
  try {
    const responseId = yield call(apiGetId, action.payload.id);
    const responseSerie = yield call(apiGetSeriesId, action.payload.id);

    yield delay(1000);
    yield put({
      type: 'SUCCESS_GET_MARVEL_ID',
      payload: {
        dataUser: responseId.data.data.results,
        dataSeries: responseSerie.data.data.results
      }
    });
  } catch (err) {
    yield put({ type: 'FAILURE_GET_MARVEL_ID' });
  }
}

function* searchMarvel(action) {
  try {
    const response = yield call(apiSearch, action.payload.name);

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
  yield takeLatest('REQUEST_GET_MARVEL_ID', getMarvelId);
  yield takeLatest('REQUEST_SEARCH_MARVEL', searchMarvel);
}
