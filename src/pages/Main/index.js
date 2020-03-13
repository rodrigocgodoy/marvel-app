import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../../components/Card';
import CardLoading from '../../components/CardLoading';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import allActions from '../../store/actions';
import { Container } from './styles';

export default function Main() {
  const [data, setData] = useState({});
  const { dataMarvel } = useSelector(state => ({
    dataMarvel: state.character
  }));
  dataMarvel.then(response => setData(response));

  const dispatch = useDispatch();

  useEffect(() => {
    const getDataMarvel = () => {
      dispatch(allActions.characterActions.requestGetMarvel());
    };
    getDataMarvel();
  }, []);

  return (
    <>
      <Header />
      <Container>
        {data?.loading && (
          <>
            <CardLoading /> <CardLoading /> <CardLoading />
            <CardLoading /> <CardLoading /> <CardLoading />
            <CardLoading /> <CardLoading /> <CardLoading />
            <CardLoading /> <CardLoading /> <CardLoading />
            <CardLoading /> <CardLoading /> <CardLoading />
          </>
        )}
        {data?.error && <h1>Error ...</h1>}
        {data?.data &&
          data.data.map(dataMap => {
            return <Card data={dataMap} key={dataMap.id} />;
          })}
      </Container>
      <Footer />
    </>
  );
}
