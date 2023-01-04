import React from 'react';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../../store/modules/pokemon-redux/actions';
import { Sort } from './styled';

export default function Header() {
  const dispatch = useDispatch();
  const sortAZ = useSelector((state) => state.sort.sortAZ);

  function sort() {
    dispatch(actions.sortAZSuccess());
  }

  return (
    <Sort>
      <button type="button" className="sort" onClick={sort}>
        <div>
          <p>A</p>
          <p>Z</p>
        </div>
        <span>
          {sortAZ ? (
            <FontAwesomeIcon
              icon={faArrowDownLong}
              style={{ transition: '0.3s ease-in-out' }}
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
        </span>
      </button>
    </Sort>
  );
}
