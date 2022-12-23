import * as types from '../types';

const initialState = {
  sortAZ: false,
  sort19: false,
  sortMenu: false,
  stats: {},
  color: '',
  text: '',
  searchValue: '',
};

const pokemons = {
  savedPokemons: {},
};

// eslint-disable-next-line default-param-last, func-names
export function sort(state = pokemons, action) {
  switch (action.type) {
    case types.SORTAZ_SUCCESS: {
      const newState = { ...state };
      newState.sortAZ = !newState.sortAZ;
      newState.sort19 = undefined;
      return newState;
    }

    case types.SORT19_REQUEST: {
      const newState = { ...state };
      newState.sort19 = !newState.sort19;
      newState.sortAZ = undefined;
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
