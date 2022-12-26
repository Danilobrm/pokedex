import React from 'react';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../../../store/modules/pokemon-redux/actions';

export default function SortAZ() {
  const dispatch = useDispatch();
  const sortAZ = useSelector((state) => state.sort.sortAZ);
  const sortState = sortAZ === true || sortAZ === false;

  function sortAZFunction() {
    dispatch(actions.sortAZSuccess());
    dispatch(actions.sortMenuSuccess());
  }
  return (
    <button
      type="button"
      onClick={sortAZFunction}
      style={{
        border: 'none',
        color: '#fff',
        width: 'fit-content',
        background: 'transparent',
        cursor: 'pointer',
        fontSize: '20px',
        display: 'flex',
        marginTop: '10px',
      }}
    >
      Nome
      <div
        style={{
          lineHeight: 1,
          fontSize: '13px',
          position: 'relative',
          top: '3px',
          marginLeft: '10px',
        }}
      >
        <p>A</p>
        <p>Z</p>
      </div>
      {sortState && sortAZ && (
        <FontAwesomeIcon
          icon={faArrowDownLong}
          style={{
            fontSize: '18px',
            position: 'relative',
            top: '7px',
          }}
        />
      )}
      {sortState && !sortAZ && (
        <FontAwesomeIcon
          icon={faArrowDownLong}
          style={{
            fontSize: '18px',
            position: 'relative',
            top: '7px',
            transform: 'rotate(180deg)',
          }}
        />
      )}
    </button>
  );
}
