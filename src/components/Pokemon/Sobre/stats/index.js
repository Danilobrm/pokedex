import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { StatsStyle } from './styled';
import About from '../about/index';
import Loading from '../../../Loading/index';

export default function Stats() {
  const [color, setColor] = useState('');
  const [stats, setStats] = useState({});
  const pokemon = useSelector((state) => state.pokedex);

  useEffect(() => {
    setColor(pokemon.color);
    setStats(pokemon.stats);
  }, [color, pokemon.color, pokemon.stats, stats]);
  if (!stats.types) {
    return <Loading />;
  }
  return (
    <StatsStyle>
      <div className="types">
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
      </div>
      <div className="about">
        <h2 style={{ color: `${color}` }}>About</h2>
        <About />
      </div>
    </StatsStyle>
  );
}
