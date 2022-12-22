import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BaseStatsStyle } from './styled';
import Loading from '../../../Loading/index';

export default function BaseStats() {
  const [color, setColor] = useState('');
  const [stats, setStats] = useState({});
  const pokemon = useSelector((state) => state.pokedex);
  useEffect(() => {
    setColor(pokemon.color);
    setStats(pokemon.stats);
  }, [pokemon.color, pokemon.stats]);
  if (!stats.types) {
    return <Loading />;
  }
  return (
    <BaseStatsStyle>
      <h2 style={{ color: `${color}` }}>Base Stats</h2>
      {stats.stats.map((item) => {
        return (
          <div className="stats" key={item.stat.name}>
            <div className="stat-name" style={{ color: `${color}` }}>
              {item.stat.name.includes('hp') && 'HP'}
              {item.stat.name === 'defense' && 'DEF'}
              {item.stat.name === 'attack' && 'ATK'}
              {item.stat.name.includes('-attack') && 'SATK'}
              {item.stat.name.includes('-defense') && 'SDEF'}
              {item.stat.name.includes('speed') && 'SPD'}
            </div>
            <div className="vertical-line" />
            <div className="base-stat">0{item.base_stat}</div>
            <div className="line">
              <span
                className="line-stat"
                style={{
                  background: `${color}`,
                  opacity: '1',
                  width: `${item.base_stat * 0.5}%`,
                }}
              />
              <span
                className="line-stat-back"
                style={{ background: `${color}`, opacity: '0.2' }}
              />
            </div>
          </div>
        );
      })}
    </BaseStatsStyle>
  );
}
