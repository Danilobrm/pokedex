import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  faArrowDownLong,
  faArrowUpLong,
  faArrowDownAZ,
  faArrowUpAZ,
  faHashtag,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { Nav } from './styled';
import * as actions from '../../../store/modules/pokemon-redux/actions';
import SearchBar from './searchBar/index';

export default function Header() {
  const dispatch = useDispatch();
  const sortNav = useRef();
  const sortAZ = useSelector((state) => state.sort.sortAZ);
  const sort19 = useSelector((state) => state.sort.sort19);
  const iconOpenSort = useRef();

  function checkMenu() {
    if (sortNav.current.className === 'sort-nav active') {
      iconOpenSort.current.style.color = '#fff';
      return;
    }
    iconOpenSort.current.style.color = 'black';
  }

  function sortMenuAction() {
    sortNav.current.classList.toggle('active');
    dispatch(actions.sortMenuSuccess());
    checkMenu();
  }

  function sortAZFunction() {
    dispatch(actions.sortAZRequest());
    sortNav.current.classList.toggle('active');
    checkMenu();
  }

  function sort19Function() {
    dispatch(actions.sort19Request());
    sortNav.current.classList.toggle('active');
    checkMenu();
  }
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
        <div>
          <button
            ref={iconOpenSort}
            type="button"
            className="sort"
            onClick={sortMenuAction}
          >
            <FontAwesomeIcon icon={faHashtag} style={{ fontSize: '13px' }} />
            {sortAZ || sort19 === false ? (
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

              <button type="button" onClick={sort19Function}>
                Número do Pokédex
                <FontAwesomeIcon
                  icon={faHashtag}
                  style={{
                    fontSize: '12px',
                    marginLeft: '10px',
                  }}
                />
                {sort19 === false ? (
                  <FontAwesomeIcon
                    icon={faArrowDownLong}
                    style={{
                      fontSize: '15px',
                    }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faArrowUpLong}
                    style={{
                      fontSize: '15px',
                    }}
                  />
                )}
              </button>
            </span>
          </nav>
        </div>
      </Nav>
      <SearchBar />
    </>
  );
}
