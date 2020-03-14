import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import CardSerie from '../../components/CardSerie';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import allActions from '../../store/actions';
import { Container } from './styles';

export default function Character() {
  const { characterId } = useParams();
  // const [dataUser, setDataUser] = useState({});
  // const [dataSeries, setDataSeries] = useState({});
  const [data, setData] = useState({});
  const { dataMarvel } = useSelector(state => ({
    dataMarvel: state.character
  }));
  dataMarvel.then(response => setData(response));
  // dataMarvel.then(response => setDataSeries(response?.dataSeries));

  const dispatch = useDispatch();

  useEffect(() => {
    const getDataMarvel = () => {
      dispatch(allActions.characterActions.requestGetMarvelId(characterId));
    };
    getDataMarvel();
  }, []);
  console.log(data);

  return (
    <>
      <Header />
      <Container>
        <div className="profile">
          <div className="title">Profile</div>
          <div className="profileContent">
            {data?.loading && <h1>loading</h1>}
            {data?.dataUser?.map(response => (
              <div key={response?.id}>
                <img
                  src={`${response?.thumbnail?.path}.${response?.thumbnail?.extension}`}
                  alt={response?.name}
                />
                <span className="title-name">{response?.name}</span>
                <span>{response?.description}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="series">
          <div className="title">Séries</div>
          <div className="serieContent">
            {data?.dataSeries?.map(response => (
              <CardSerie data={response} key={response?.id} />
            ))}
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
