import { put, all, takeLatest } from 'redux-saga/effects';
// import { get } from 'lodash';
import * as actions from './actions';
import * as types from '../types';
// import axios from '../../../services/axios';

function* sortAZRequest() {
  yield put(actions.sortAZSuccess());
}

function* pokemonsDataSaveRequest({ payload }) {
  const { color, pokemonStats, text } = payload;
  yield put(actions.pokemonsDataSaveSuccess({ color, pokemonStats, text }));
}

// function persistRehydrate({ payload }) {
//   const sortState = get(payload, 'sort.sortPokedex', '');
//   if (!sortState) return;
//   axios.defaults.headers.sortState = sortState;
// }

export default all([
  takeLatest(types.SORTAZ_REQUEST, sortAZRequest),
  takeLatest(types.POKEMONDATASAVE_REQUEST, pokemonsDataSaveRequest),
  // takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
