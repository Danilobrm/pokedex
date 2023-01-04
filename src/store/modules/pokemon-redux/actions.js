import * as types from '../types';

export function pokemonsDataSaveSuccess(payload) {
  return {
    type: types.POKEMONDATASAVE_SUCCESS,
    payload,
  };
}

export function pokemonSearchInputSuccess(payload) {
  return {
    type: types.POKEMONSEARCHINPUT_SUCCESS,
    payload,
  };
}

export function sortAZSuccess() {
  return {
    type: types.SORTAZ_SUCCESS,
  };
}
