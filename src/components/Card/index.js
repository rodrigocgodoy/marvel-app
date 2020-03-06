import PropTypes from 'prop-types';
import React from 'react';
// import { useSelector, shallowEqual } from 'react-redux';

import { Container } from './styles';

export default function Card({ data }) {
  // const dataMarvel = useSelector(state => state.character, shallowEqual);
  console.log(data);

  return (
    <Container
    // id={data.id}
    // onClick={() => {
    //   console.log(id);
    // }}
    >
      <div className="imgContainer">
        <img
          src={`${data.thumbnail.path}${data.thumbnail.extension}`}
          alt={data.name}
        />
      </div>
      <div className="nameContainer">
        <span>{data.name}</span>
      </div>
    </Container>
  );
}

Card.prototype = {
  data: PropTypes.object
};
