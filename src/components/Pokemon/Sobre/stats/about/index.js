import React, { useEffect, useState } from 'react';
import { faWeightScale, faRuler } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { AboutArea, BodyData } from './styled';
import Loading from '../../../../Loading/index';
import BaseStats from './base-stats/index';

export default function About() {
  const [stats, setStats] = useState({});
  const [text, setText] = useState('');
  const pokemon = useSelector((state) => state.pokedex);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setStats(pokemon.stats);
    setIsLoading(false);
    setText(pokemon.text);
  }, [pokemon.stats, pokemon.text]);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <AboutArea>
      <h2 style={{ color: `${pokemon.color}` }}>About</h2>
      <BodyData>
        <div className="weight">
          <span>
            <FontAwesomeIcon
              className="iconWeight"
              icon={faWeightScale}
              style={{
                color: 'gray',
                marginRight: '10px',
              }}
            />
            {stats.weight / 10} kg
          </span>
          <p>Weight</p>
        </div>

        <div className="height">
          <span>
            <FontAwesomeIcon
              className="iconRuler"
              icon={faRuler}
              style={{
                transform: 'rotate(-45deg)',
                color: 'gray',
              }}
            />
            <div className="balanca" />
            {stats.height / 10} m
          </span>
          <p>Height</p>
        </div>

        <div className="moves">
          <span>
            {stats.moves.slice(0, 2).map((move) => {
              return <div key={move.move.name[0]}>{move.move.name}</div>;
            })}
          </span>
          <p>Moves</p>
        </div>
      </BodyData>
      <p className="text">{text}</p>
      <BaseStats />
    </AboutArea>
  );
}
