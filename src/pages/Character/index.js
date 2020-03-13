import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import allActions from '../../store/actions';
import { Container } from './styles';

export default function Character() {
  const { characterId } = useParams();
  const [dataUser, setDataUser] = useState({});
  const [dataSeries, setDataSeries] = useState({});
  const { dataMarvel } = useSelector(state => ({
    dataMarvel: state.character
  }));
  dataMarvel.then(response => setDataUser(response));

  const dispatch = useDispatch();

  useEffect(() => {
    const getDataMarvel = () => {
      dispatch(allActions.characterActions.requestGetMarvelId(characterId));
    };
    getDataMarvel();
  }, []);

  console.log(dataUser);
  return (
    <>
      <Header />
      <Container>
        <h1>teste</h1>
      </Container>
      <Footer />
    </>
  );
}
