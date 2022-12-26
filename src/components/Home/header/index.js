import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './styled';
import SearchBar from './searchBar/index';
import Sort from './sortMenu';

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
        <Sort />
      </Nav>
      <SearchBar />
    </>
  );
}
