import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { FaSearch, IoMdClose } from 'react-icons/all';
import { useDispatch } from 'react-redux';

import logo from '../../assets/logo.png';
import allActions from '../../store/actions';
import { Container } from './styles';

export default function Header() {
  const [search, setSearch] = useState('');
  const [searchOn, setSearchOn] = useState(false);

  const dispatch = useDispatch();

  const handleSearch = () => {
    setSearchOn(!searchOn);
  };

  useEffect(() => {
    const getDataMarvel = () => {
      dispatch(allActions.characterActions.requestSearchMarvel(search));
    };
    getDataMarvel();
  }, [search]);

  return (
    <Container>
      <img src={logo} alt="Marvel App" />
      {!searchOn ? (
        <div className="containerSeacrhClosed">
          <input
            type="text"
            onChange={e => setSearch(e.target.value)}
            value={search}
          />
          <FaSearch onClick={() => handleSearch()} />
        </div>
      ) : (
        <div className="containerSeacrhOn">
          <input
            type="text"
            onChange={e => setSearch(e.target.value)}
            value={search}
          />
          <IoMdClose onClick={() => handleSearch()} />
        </div>
      )}
    </Container>
  );
}

Header.prototype = {
  textSearch: PropTypes.string,
  setTextSearch: PropTypes.func
};
