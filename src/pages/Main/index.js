import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Main() {
  return (
    <>
      <Header />

      <Container>
        <h1>Teste</h1>
      </Container>

      <Footer />
    </>
  );
}
