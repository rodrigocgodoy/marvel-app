import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';

import { Container } from './styles';

export default function Card({ image, name }) {
  // const dataMarvel = useSelector(state => state.character, shallowEqual);

  return (
    <Container>
      <div className="imgContainer">
        <img src={image} alt={name} />
      </div>
      <div className="nameContainer">
        <span>{name}</span>
      </div>
    </Container>
  );
}

Card.prototype = {
  image: PropTypes.string,
  name: PropTypes.string
};
