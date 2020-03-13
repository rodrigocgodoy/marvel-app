import PropTypes from 'prop-types';
import React from 'react';

import { Container } from './styles';

export default function Card({ data }) {
  return (
    <Container>
      <div className="imgContainer">
        <img
          src={`${data?.thumbnail?.path}.${data?.thumbnail?.extension}`}
          alt={data?.name}
        />
      </div>
      <div className="nameContainer">
        <span>{data?.name}</span>
      </div>
    </Container>
  );
}

Card.prototype = {
  data: PropTypes.shape({
    thumbnail: PropTypes.shape({
      path: PropTypes.string,
      extension: PropTypes.string
    }),
    name: PropTypes.name
  })
};
