import React, { useEffect, useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import allActions from '../../store/actions';
import { Container } from './styles';

export default function Main() {
  // const [dataMarvel, setDataMarvel] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    function getDataMarvel() {
      dispatch(allActions.characterActions.getApiMarvel());
      // dispatch({ type: 'GET_API_MARVEL' });
    }
    getDataMarvel();
  }, []);

  const dataMarvel = useSelector(state => state.character, shallowEqual);

  console.log(dataMarvel);
  return (
    <>
      <Header />

      <Container>
        {!!dataMarvel &&
          !!dataMarvel.data &&
          !!dataMarvel.data.map(data => {
            return <Card data={data} />;
          })}
        <Card
          image="http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c003d00c8ed9.jpg"
          name="Ben Parker"
        />
        <Card
          image="http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c003d00c8ed9.jpg"
          name="Ben Parker"
        />
        <Card
          image="http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c003d00c8ed9.jpg"
          name="Ben Parker"
        />
        <Card
          image="http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c003d00c8ed9.jpg"
          name="Ben Parker"
        />
        <Card
          image="http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c003d00c8ed9.jpg"
          name="Ben Parker"
        />
        <Card
          image="http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c003d00c8ed9.jpg"
          name="Ben Parker"
        />
        <Card
          image="http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c003d00c8ed9.jpg"
          name="Ben Parker"
        />
        <Card
          image="http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c003d00c8ed9.jpg"
          name="Ben Parker"
        />
        <Card
          image="http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c003d00c8ed9.jpg"
          name="Ben Parker"
        />
        <Card
          image="http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c003d00c8ed9.jpg"
          name="Ben Parker"
        />
        <Card
          image="http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c003d00c8ed9.jpg"
          name="Ben Parker"
        />
        <Card
          image="http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c003d00c8ed9.jpg"
          name="Ben Parker"
        />
        <Card
          image="http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c003d00c8ed9.jpg"
          name="Ben Parker"
        />
        <Card
          image="http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c003d00c8ed9.jpg"
          name="Ben Parker"
        />
        <Card
          image="http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c003d00c8ed9.jpg"
          name="Ben Parker"
        />
        <Card
          image="http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c003d00c8ed9.jpg"
          name="Ben Parker"
        />
        <Card
          image="http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c003d00c8ed9.jpg"
          name="Ben Parker"
        />
        <Card
          image="http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c003d00c8ed9.jpg"
          name="Ben Parker"
        />
        <Card
          image="http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c003d00c8ed9.jpg"
          name="Ben Parker"
        />
        <Card
          image="http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c003d00c8ed9.jpg"
          name="Ben Parker"
        />
        <Card
          image="http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c003d00c8ed9.jpg"
          name="Ben Parker"
        />
        <Card
          image="http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c003d00c8ed9.jpg"
          name="Ben Parker"
        />
        <Card
          image="http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c003d00c8ed9.jpg"
          name="Ben Parker"
        />
        <Card
          image="http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c003d00c8ed9.jpg"
          name="Ben Parker"
        />
        <Card
          image="http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c003d00c8ed9.jpg"
          name="Ben Parker"
        />
        <Card
          image="http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c003d00c8ed9.jpg"
          name="Ben Parker"
        />
        <Card
          image="http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c003d00c8ed9.jpg"
          name="Ben Parker"
        />
        <Card
          image="http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c003d00c8ed9.jpg"
          name="Ben Parker"
        />
        <Card
          image="http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c003d00c8ed9.jpg"
          name="Ben Parker"
        />
        <Card
          image="http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c003d00c8ed9.jpg"
          name="Ben Parker"
        />
      </Container>

      <Footer />
    </>
  );
}
