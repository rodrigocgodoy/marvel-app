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

  useEffect(() => {
    function getDataMarvel() {
      dispatch(allActions.characterActions.getApiMarvel());
      // dispatch({ type: 'GET_API_MARVEL' });
    }
    getDataMarvel();
  });

  const handleSearch = () => {
    setSearchOn(!searchOn);
  };

  return (
    <Container>
      <img src={logo} alt="Marvel App" />
      {!searchOn ? (
        <div className="containerSeacrhClosed">
          <input type="text" onChange={e => setSearch(e.target.value)} />
          <FaSearch onClick={() => handleSearch()} />
        </div>
      ) : (
        <div className="containerSeacrhOn">
          <input type="text" onChange={e => setSearch(e.target.value)} />
          <IoMdClose onClick={() => handleSearch()} />
        </div>
      )}
    </Container>
  );
}
