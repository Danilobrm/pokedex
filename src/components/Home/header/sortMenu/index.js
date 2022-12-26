import React, { useEffect, useRef } from 'react';
import { faArrowDownLong, faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../../store/modules/pokemon-redux/actions';
import SortAZ from './sortName';
import SortID from './sortId';
import { SortArea } from './styled';

export default function Header() {
  const dispatch = useDispatch();
  const sortNav = useRef();
  const sortAZ = useSelector((state) => state.sort.sortAZ);
  const sort19 = useSelector((state) => state.sort.sort19);
  const sortMenu = useSelector((state) => state.pokedex.sortMenu);
  const sort19state = sort19 || sort19 === false;
  const sortAZstate = sortAZ || sortAZ === false;
  const iconOpenSort = useRef();
  const sortArea = useRef();

  useEffect(() => {
    function checkMenu() {
      if (sortMenu) {
        sortNav.current.classList.add('active');
        iconOpenSort.current.style.color = 'white';
      }
      if (!sortMenu) {
        sortNav.current.classList.remove('active');
        iconOpenSort.current.style.color = 'black';
      }
    }
    checkMenu();
  });

  function sortMenuAction() {
    dispatch(actions.sortMenuSuccess());
  }

  return (
    <SortArea ref={sortArea}>
      <button
        ref={iconOpenSort}
        type="button"
        className="sort"
        onClick={sortMenuAction}
      >
        {sort19state && (
          <FontAwesomeIcon icon={faHashtag} style={{ fontSize: '13px' }} />
        )}
        {sortAZstate && (
          <div
            style={{
              lineHeight: 1,
              fontSize: '13px',
              position: 'relative',
              marginLeft: '10px',
            }}
          >
            <p>A</p>
            <p>Z</p>
          </div>
        )}
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
      <nav className="sort-nav" ref={sortNav}>
        <SortAZ />
        <SortID />
      </nav>
    </SortArea>
  );
}
