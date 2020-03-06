import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
// import allActions from '../../store/actions';
import { Container } from './styles';

export default function Main() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   function getDataMarvel() {
  //     dispatch(allActions.characterActions.getApiMarvel());
  //     // dispatch({ type: 'GET_API_MARVEL' });
  //   }
  //   getDataMarvel();
  // }, []);

  const dataMarvel = useSelector(state => state.character, shallowEqual);

  console.log(dataMarvel);
  return (
    <>
      <Header />
      <Container>
        {!dataMarvel?.isLoading ? (
          dataMarvel?.data?.map(data => {
            console.log(data);
            return <Card data={data} />;
          })
        ) : (
          <h1>isLoading</h1>
        )}
      </Container>
      <Footer />
    </>
  );
}
