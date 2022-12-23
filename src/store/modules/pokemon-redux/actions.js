import * as types from '../types';

export function sortAZRequest(payload) {
  return {
    type: types.SORTAZ_REQUEST,
    payload,
  };
}

export function sortAZSuccess(payload) {
  return {
    type: types.SORTAZ_SUCCESS,
    payload,
  };
}

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

export function sort19Request() {
  return {
    type: types.SORT19_REQUEST,
  };
}

export function sort19Success() {
  return {
    type: types.SORT19_SUCCESS,
  };
}
