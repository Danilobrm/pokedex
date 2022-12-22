import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Header } from './styled';
import axios from '../../../../services/axios';

export default function HeaderComponent() {
  const [name, setName] = useState('');
  const { id } = useParams();
  useEffect(() => {
    async function loadPokemonColor() {
      const response = await axios.get(`/pokemon-species/${id}`);
      setName(response.data.name);
    }
    loadPokemonColor();
  }, [id]);

  return (
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
  );
}
