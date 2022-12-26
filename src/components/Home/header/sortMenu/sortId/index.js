import React from 'react';
import { faArrowDownLong, faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../../../store/modules/pokemon-redux/actions';

export default function SortID() {
  const dispatch = useDispatch();
  const sort19 = useSelector((state) => state.sort.sort19);
  const sortState = sort19 === true || sort19 === false;

  function sort19Function() {
    dispatch(actions.sort19Success());
    dispatch(actions.sortMenuSuccess());
  }
  return (
    <button
      type="button"
      onClick={sort19Function}
      style={{
        border: 'none',
        color: '#fff',
        width: 'fit-content',
        background: 'transparent',
        cursor: 'pointer',
        fontSize: '20px',
        marginTop: '10px',
      }}
    >
      Número do Pokédex
      <FontAwesomeIcon
        icon={faHashtag}
        style={{
          fontSize: '14px',
          marginLeft: '10px',
        }}
      />
      {sortState && sort19 && (
        <FontAwesomeIcon
          icon={faArrowDownLong}
          style={{
            fontSize: '18px',
            transform: 'rotate(180deg)',
            position: 'relative',
            top: '3px',
          }}
        />
      )}
      {sortState && !sort19 && (
        <FontAwesomeIcon
          icon={faArrowDownLong}
          style={{
            fontSize: '18px',
            position: 'relative',
            top: '3px',
          }}
        />
      )}
    </button>
  );
}
