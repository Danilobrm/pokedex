import * as types from '../types';

export function pokemonsDataSaveRequest(payload) {
  return {
    type: types.POKEMONDATASAVE_REQUEST,
    payload,
  };
}

export function pokemonsDataSaveSuccess(payload) {
  return {
    type: types.POKEMONDATASAVE_SUCCESS,
    payload,
  };
}

export function pokemonSearchInputRequest(payload) {
  return {
    type: types.POKEMONSEARCHINPUT_REQUEST,
    payload,
  };
}

export function pokemonSearchInputSuccess(payload) {
  return {
    type: types.POKEMONSEARCHINPUT_SUCCESS,
    payload,
  };
}

export function sortMenuSuccess() {
  return {
    type: types.SORTMENU_SUCCESS,
  };
}

export function sortAZSuccess() {
  return {
    type: types.SORTAZ_SUCCESS,
  };
}

export function sort19Success() {
  return {
    type: types.SORT19_SUCCESS,
  };
}
