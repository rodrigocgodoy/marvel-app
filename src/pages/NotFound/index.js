import React from 'react';
import { Link } from 'react-router-dom';

import NotFoundImg from '../../assets/error_404.svg';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Container } from './styles';

export default function Character() {
  return (
    <>
      <Header />
      <Container>
        <img src={NotFoundImg} alt="Página não encontrada" />
        <div className="containerMessage">
          <div>
            <h1>Sorry :(</h1>
            <span>Página não encontrada</span>
          </div>

          {/* <input
            type="button"
            value="Voltar para Home"
            onClick={() => <Link to="/" />}
          /> */}
          <Link to="/">
            <button type="button">Voltar para Home</button>
          </Link>
        </div>
      </Container>
      <Footer />
    </>
  );
}
