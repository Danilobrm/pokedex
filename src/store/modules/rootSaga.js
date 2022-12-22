import { all } from 'redux-saga/effects';

import pokedex from './pokemon-redux/sagas';

export default function* rootSaga() {
  return yield all([pokedex]);
}
