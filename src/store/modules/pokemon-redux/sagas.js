import { put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from '../types';

function* pokemonsDataSaveRequest({ payload }) {
  const { color, pokemonStats, text } = payload;
  yield put(actions.pokemonsDataSaveSuccess({ color, pokemonStats, text }));
}

function* pokemonSearchInputRequest({ payload }) {
  const { value } = payload;
  yield put(actions.pokemonSearchInputSuccess({ value }));
}

export default all([
  takeLatest(types.POKEMONDATASAVE_REQUEST, pokemonsDataSaveRequest),
  takeLatest(types.POKEMONSEARCHINPUT_REQUEST, pokemonSearchInputRequest),
]);
