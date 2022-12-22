import * as types from '../types';

const initialState = {
  sort: false,
  stats: {},
  color: '',
  text: '',
};

// eslint-disable-next-line default-param-last, func-names
export default function (state = initialState, action) {
  switch (action.type) {
    case types.SORTAZ_SUCCESS: {
      const newState = { ...state };
      newState.sort = !newState.sort;
      return newState;
    }

    case types.POKEMONDATASAVE_SUCCESS: {
      const newState = { ...state };
      newState.stats = action.payload.pokemonStats;
      newState.color = action.payload.color;
      newState.text = action.payload.text;
      return newState;
    }

    default: {
      return state;
    }
  }
}
