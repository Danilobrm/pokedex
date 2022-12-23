import { combineReducers } from 'redux';

import { sort, pokedex } from './pokemon-redux/reducer';

export default combineReducers({
  sort,
  pokedex,
});
