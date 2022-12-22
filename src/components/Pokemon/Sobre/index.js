import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  faArrowLeft,
  faWeightScale,
  faRuler,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from '../../../services/axios';
import Loading from '../../Loading';
import { AboutArea, Container, Header, Stats } from './styled';

export default function About() {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [pokemonStats, setPokemonStats] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    async function loadPokemonColor() {
      const response = await axios.get(`/pokemon-species/${id}`);
      setName(response.data.name);
      setColor(response.data.color.name);
    }
    loadPokemonColor();

    async function loadPokemonStats() {
      const stats = await axios.get(`/pokemon/${id}/`);
      setPokemonStats(stats.data);
      setIsLoading(false);
    }
    loadPokemonStats();
  }, [id]);

  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }
  return (
    <Container style={{ backgroundColor: `${color}` }}>
      <div>
        <img
          className="backgroundPokeball"
          src="https://img.icons8.com/sf-regular-filled/500/FFFFFF/pokeball.png"
          alt="pokeball"
        />
        <Header>
          <span>
            <Link to="/">
              <FontAwesomeIcon
                style={{
                  cursor: 'pointer',
                  padding: '0 20px',
                }}
                icon={faArrowLeft}
              />
            </Link>
            <h1>{name.slice(0, 1).toUpperCase() + name.slice(1)}</h1>
          </span>
          <div>#{id}</div>
        </Header>
        <img
          className="pokemon"
          src={`https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt={name}
        />
      </div>
      <Stats>
        <div className="types">
          {pokemonStats.types.map((typeOBJ) => {
            return (
              <div
                className="type"
                key={typeOBJ.type.name[0]}
                style={{ backgroundColor: `${color}` }}
              >
                {typeOBJ.type.name.slice(0, 1).toUpperCase() +
                  typeOBJ.type.name.slice(1)}
              </div>
            );
          })}
        </div>
        <div className="about">
          <h2 style={{ color: `${color}` }}>About</h2>
          <AboutArea>
            <div className="weight">
              <span>
                <FontAwesomeIcon
                  icon={faWeightScale}
                  style={{
                    fontSize: '30px',
                    color: 'gray',
                    marginRight: '10px',
                  }}
                />
                {pokemonStats.weight / 10} kg
              </span>
              <p>Weight</p>
            </div>
            <div className="height">
              <span>
                <FontAwesomeIcon
                  icon={faRuler}
                  style={{
                    fontSize: '30px',
                    transform: 'rotate(-45deg)',
                    color: 'gray',
                  }}
                />
                {pokemonStats.height / 10} m
              </span>
              <p>Height</p>
            </div>
            <div className="moves">
              <span>
                {pokemonStats.moves.slice(0, 2).map((move) => {
                  return <div key={move.move.name[0]}>{move.move.name}</div>;
                })}
              </span>
              <p>Moves</p>
            </div>
          </AboutArea>
        </div>
      </Stats>
    </Container>
  );
}
