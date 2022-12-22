import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../services/axios';
import { PokedexStyle } from './styled';
import Header from '../header/index';
import Loading from '../../Loading';

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const pokedex = useRef();
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
      setPokemons(arrayPokemons);
      setIsLoading(false);
    }
    loadPokemonsFirstGen();
  }, []);

  return (
    <>
      <Header />
      <PokedexStyle ref={pokedex}>
        <Loading isLoading={isLoading} />
        {pokemons.map((pokemon) => {
          const { id } = pokemon;
          return (
            <Link
              to={`/pokemon/${id}`}
              key={pokemon.name}
              className="pokemon-card"
              style={{ borderColor: `${pokemon.color.name}` }}
            >
              <div style={{ color: `${pokemon.color.name}` }} className="id">
                #{id}
              </div>

              <img
                src={`https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
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
