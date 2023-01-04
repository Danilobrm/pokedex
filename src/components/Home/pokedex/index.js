import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import axios from '../../../services/axios';
import { PokedexStyle } from './styled';
import Header from '../header/index';
import Loading from '../../Loading';

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [localFavorites, setLocalFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const sortAZ = useSelector((state) => state.sort.sortAZ);
  const value = useSelector((state) => state.pokedex.searchValue);

  useEffect(() => {
    async function loadPokemonsFirstGen() {
      const response = await axios.get('generation/1');
      const array = response.data.pokemon_species;
      const arrayPokemons = await Promise.all(
        array.map(async (pokemon) => {
          const dados = await axios.get(pokemon.url);
          return dados.data;
        })
      );
      setIsLoading(false);
      setPokemons(arrayPokemons);
    }
    loadPokemonsFirstGen();

    function getFavorites() {
      const myPokemonList = localStorage.getItem('@favoritepokemons');
      const savedPokemons = JSON.parse(myPokemonList) || [];
      setLocalFavorites(savedPokemons);
    }
    getFavorites();
  }, []);

  useEffect(() => {
    function search() {
      if (value) {
        const filtered = pokemons.filter((item) =>
          Object.values(item)
            .join('')
            .toLowerCase()
            .includes(value.toLowerCase())
        );
        return setFilteredPokemons(filtered);
      }
      return setFilteredPokemons(pokemons);
    }
    search();
  }, [pokemons, value]);

  function sort() {
    if (sortAZ) {
      pokemons.sort((a, b) => a.name.localeCompare(b.name));
      return;
    }
    pokemons.sort((a, b) => b.name.localeCompare(a.name));
  }
  sort();

  return (
    <>
      <Loading isLoading={isLoading} />
      <Header />
      <PokedexStyle>
        {filteredPokemons.map((pokemon) => {
          const { id } = pokemon;

          const hasPokemon = localFavorites.some((item) => item.id === id);

          return (
            <Link
              to={`/pokemon/${id}`}
              key={pokemon.name}
              className="pokemon-card"
              style={{ borderColor: `${pokemon.color.name}` }}
            >
              <span>
                <div>
                  {hasPokemon ? (
                    <FaStar color="#ffcb0c" />
                  ) : (
                    <FaStar color="transparent" />
                  )}
                </div>

                <div style={{ color: `${pokemon.color.name}` }} className="id">
                  #{id}
                </div>
              </span>

              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                alt={pokemon.name}
              />
              <h1 style={{ background: `${pokemon.color.name}` }}>
                {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
              </h1>
            </Link>
          );
        })}
      </PokedexStyle>
    </>
  );
}
