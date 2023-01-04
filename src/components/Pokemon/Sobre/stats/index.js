import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { StatsStyle } from './styled';
import About from './about/index';
import Loading from '../../../Loading/index';

export default function Stats() {
  const { id } = useParams();
  const [color, setColor] = useState('');
  const [stats, setStats] = useState({});
  const [pokemons, setPokemons] = useState([]);
  const [checkSavedPokemon, setCheckSavedPokemon] = useState(false);
  const pokemon = useSelector((state) => state.pokedex);
  useEffect(() => {
    setColor(pokemon.color);
    setStats(pokemon.stats);
    function checkSaved() {
      const myPokemonList = localStorage.getItem('@favoritepokemons');
      const savedPokemons = JSON.parse(myPokemonList) || [];
      const hasPokemon = savedPokemons.some(
        (savedPokemon) => savedPokemon.id === Number(id)
      );
      if (hasPokemon) {
        setCheckSavedPokemon(true);
      }
    }
    checkSaved();

    const myList = localStorage.getItem('@favoritepokemons');
    setPokemons(JSON.parse(myList) || []);
  }, [color, id, pokemon.color, pokemon.stats, stats]);

  function handleFavorite() {
    const myPokemonsList = localStorage.getItem('@favoritepokemons');
    const savedPokemons = JSON.parse(myPokemonsList) || [];
    setCheckSavedPokemon(true);
    const hasPokemon = savedPokemons.some(
      (savedPokemon) => savedPokemon.id === id
    );
    if (hasPokemon) return;
    savedPokemons.push(pokemon.stats);
    localStorage.setItem('@favoritepokemons', JSON.stringify(savedPokemons));
  }

  function handleDelete() {
    const pokemonsFilter = pokemons.filter((item) => item.id !== Number(id));
    setPokemons(pokemonsFilter);
    localStorage.setItem('@favoritepokemons', JSON.stringify(pokemonsFilter));
    setCheckSavedPokemon(false);
  }
  if (!stats.types) {
    return <Loading />;
  }
  return (
    <StatsStyle>
      <span className="types">
        {stats.types.map((type) => {
          return (
            <div
              className="type"
              key={type.type.name[0]}
              style={{ backgroundColor: `${color}` }}
            >
              {type.type.name.slice(0, 1).toUpperCase() +
                type.type.name.slice(1)}
            </div>
          );
        })}
      </span>
      {checkSavedPokemon ? (
        <button
          type="button"
          onClick={handleDelete}
          className="favorite-button"
        >
          <FaStar className="favorite" color="#ffcb0c" />
        </button>
      ) : (
        <button
          type="button"
          onClick={handleFavorite}
          className="favorite-button"
        >
          <FaStar className="favorite" color="black" />
        </button>
      )}

      <div className="about">
        <About />
      </div>
    </StatsStyle>
  );
}
