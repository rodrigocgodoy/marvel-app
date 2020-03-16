import React from 'react';

import NotEmptyImg from '../../assets/empty.svg';
import { Container } from './styles';

export default function NotEmpty() {
  return (
    <Container>
      <img src={NotEmptyImg} alt="NotEmpty, nada encontrado" />
      <div>
        <h1>Sorry :(</h1>
        <span>Personagem não encontrado!!</span>
      </div>
    </Container>
  );
}
