import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  faArrowDownLong,
  faArrowDownAZ,
  faArrowUpAZ,
  faHashtag,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { Background, Nav, SearchBar } from './styled';
import * as actions from '../../../store/modules/pokemon-redux/actions';

export default function Header() {
  const dispatch = useDispatch();
  const sortNav = useRef();
  const background = useRef();
  const sortAZ = useSelector((state) => state.pokedex.sort);

  function sortMenuAction() {
    sortNav.current.classList.toggle('active');
    background.current.classList.toggle('active');
  }

  function sortAZFunction() {
    dispatch(actions.sortAZRequest());
    sortNav.current.classList.toggle('active');
    background.current.classList.toggle('active');
  }
  return (
    <>
      <Background ref={background} className="bg" />
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
        <div>
          <button type="button" className="sort" onClick={sortMenuAction}>
            <FontAwesomeIcon icon={faHashtag} style={{ fontSize: '15px' }} />
            {sortAZ ? (
              <FontAwesomeIcon
                icon={faArrowDownLong}
                style={{
                  transition: '0.3s ease-in-out',
                }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faArrowDownLong}
                style={{
                  transform: 'rotateX(180deg)',
                  transition: '0.3s ease-in-out',
                }}
              />
            )}
          </button>
          <nav ref={sortNav} className="sort-nav">
            <span>
              <button
                type="button"
                style={{ display: 'flex', alignItems: 'center' }}
                onClick={sortAZFunction}
              >
                Nome
                {sortAZ ? (
                  <FontAwesomeIcon
                    icon={faArrowDownAZ}
                    style={{ fontSize: '20px', marginLeft: '10px' }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faArrowUpAZ}
                    style={{ fontSize: '20px', marginLeft: '10px' }}
                  />
                )}
              </button>

              <button type="button">
                Número do Pokédex
                <FontAwesomeIcon
                  icon={faHashtag}
                  style={{ fontSize: '20px', marginLeft: '10px' }}
                />
                <FontAwesomeIcon
                  icon={faArrowDownLong}
                  style={{ fontSize: '20px', marginLeft: '10px' }}
                />
              </button>
            </span>
          </nav>
        </div>
      </Nav>
      <SearchBar type="search" placeholder="Procurar" />
    </>
  );
}
