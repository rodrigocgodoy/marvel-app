import React, { useState } from 'react';
import { FaSearch, IoMdClose } from 'react-icons/all';

import { Container } from './styles';

import logo from '../../assets/logo.png';

export default function Header() {
  const [search, setSearch] = useState('');
  const [searchOn, setSearchOn] = useState(false);

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
