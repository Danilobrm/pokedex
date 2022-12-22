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
