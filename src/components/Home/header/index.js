import React from 'react';
import { Link } from 'react-router-dom';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav, SearchBar } from './styled';

export default function Header() {
  return (
    <>
      <Nav>
        <div className="pokeball">
          <img
            src="https://img.icons8.com/ios-filled/30/1A1A1A/pokeball--v2.png"
            alt="pokeball"
          />
        </div>
        <Link className="logo" to="/">
          Pokédex
        </Link>
        <div className="sort">
          #<FontAwesomeIcon icon={faArrowDownLong} />
        </div>
      </Nav>
      <SearchBar type="search" placeholder="Procurar" />
    </>
  );
}
