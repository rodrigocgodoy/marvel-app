import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import allActions from '../../store/actions';
import { Container } from './styles';

export default function Main() {
  // const dataMarvel = useSelector(state => state.character);
  const { dataMarvel } = useSelector(state => ({
    dataMarvel: state.character
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    const getDataMarvel = () => {
      dispatch(allActions.characterActions.getApiMarvel());
    };
    getDataMarvel();
    console.log(Object.values(dataMarvel)[2]);
  }, []);

  console.info(Object.values(dataMarvel)[3].findTotal);

  return (
    <>
      <Header />
      <Container>
        {Object.values(dataMarvel)[2] ? (
          <h1>isLoading</h1>
        ) : (
          Object.values(dataMarvel)[0].map(dataMap => {
            return <Card data={dataMap} />;
          })
        )}
        {/* <Card /> */}
        <h1>{Object.values(dataMarvel)[3].findTotal}</h1>
        <button
          onClick={() => {
            dispatch(allActions.characterActions.setFindTotal());
          }}
        >
          Click
        </button>
      </Container>
      <Footer />
    </>
  );
}
