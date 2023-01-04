import * as types from '../types';

const initialState = {
  sortMenu: false,
  stats: {},
  color: '',
  text: '',
  searchValue: '',
};

const sortOption = {
  sortAZ: false,
};

// eslint-disable-next-line default-param-last, func-names
export function sort(state = sortOption, action) {
  switch (action.type) {
    case types.SORTAZ_SUCCESS: {
      const newState = { ...state };
      newState.sortAZ = !newState.sortAZ;
      return newState;
    }

    default: {
      return state;
    }
  }
}

// eslint-disable-next-line default-param-last, func-names
export function pokedex(state = initialState, action) {
  switch (action.type) {
    case types.POKEMONDATASAVE_SUCCESS: {
      const newState = { ...state };
      newState.stats = action.payload.pokemonStats;
      newState.color = action.payload.color;
      newState.text = action.payload.text;
      return newState;
    }

    case types.POKEMONSEARCHINPUT_SUCCESS: {
      const newState = { ...state };
      newState.searchValue = action.payload.value;
      return newState;
    }

    default: {
      return state;
    }
  }
}
