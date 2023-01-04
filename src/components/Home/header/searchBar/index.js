import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../../../store/modules/pokemon-redux/actions';
import { SearchBarStyle } from './styled';

export default function SearchBar() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.pokemonSearchInputSuccess({ value }));
  });

  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <SearchBarStyle
      type="search"
      placeholder="Procurar"
      value={value}
      onChange={(e) => handleChange(e)}
    />
  );
}
