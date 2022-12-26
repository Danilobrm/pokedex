import * as types from '../types';

const initialState = {
  sortMenu: false,
  stats: {},
  color: '',
  text: '',
  searchValue: '',
};

const sortArray = {
  sortAZ: undefined,
  sort19: undefined,
};

// eslint-disable-next-line default-param-last, func-names
export function sort(state = sortArray, action) {
  switch (action.type) {
    case types.SORTAZ_SUCCESS: {
      const newState = { ...state };
      newState.sortAZ = !newState.sortAZ;
      newState.sort19 = undefined;
      newState.sortFavorito = undefined;
      return newState;
    }

    case types.SORT19_SUCCESS: {
      const newState = { ...state };
      newState.sort19 = !newState.sort19;
      newState.sortAZ = undefined;
      newState.sortFavorito = undefined;
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

    case types.SORTMENU_SUCCESS: {
      const newState = { ...state };
      newState.sortMenu = !newState.sortMenu;
      return newState;
    }

    default: {
      return state;
    }
  }
}
