import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from '../../../../services/axios';
import { Container } from './styled';
import HeaderComponent from '../header/index';
import Stats from '../stats/index';
import Loading from '../../../Loading/index';
import * as actions from '../../../../store/modules/pokemon-redux/actions';

export default function About() {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [text, setText] = useState('');
  const [IsLoading, setIsLoading] = useState(true);
  const [pokemonStats, setPokemonStats] = useState({});
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    async function loadPokemonColor() {
      try {
        const response = await axios.get(`/pokemon-species/${id}`);
        setName(response.data.name);
        setColor(response.data.color.name);
        const englishText = response.data.flavor_text_entries.find(
          (item) => item.language.name === 'en'
        );
        setText(englishText.flavor_text);
      } catch (error) {
        console.log('error');
      }
    }
    loadPokemonColor();
    async function loadPokemonStats() {
      try {
        const response = await axios.get(`/pokemon/${id}/`);
        setPokemonStats(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadPokemonStats();

    setIsLoading(false);
  }, [id]);
  useEffect(() => {
    dispatch(actions.pokemonsDataSaveRequest({ pokemonStats, color, text }));
  });

  return (
    <Container style={{ backgroundColor: `${color}` }}>
      <Loading isLoading={IsLoading} />
      <div>
        <img
          className="backgroundPokeball"
          src="https://img.icons8.com/sf-regular-filled/500/FFFFFF/pokeball.png"
          alt="pokeball"
        />
        <HeaderComponent />
        <img
          className="pokemon"
          src={`https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt={name}
        />
        <Stats />
      </div>
    </Container>
  );
}
