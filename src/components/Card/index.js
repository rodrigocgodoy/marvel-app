import PropTypes from 'prop-types';
import React from 'react';
// import { useSelector, shallowEqual } from 'react-redux';

import { Container } from './styles';

export default function Card({ data }) {
  // console.log(data);

  return (
    // <Container
    //   key={data?.id}
    // >
    //   <div className="imgContainer">
    //     <img
    //       src={`${data?.thumbnail?.path}.${data?.thumbnail?.extension}`}
    //       alt={data?.name}
    //     />
    //   </div>
    //   <div className="nameContainer">
    //     <span>{data?.name}</span>
    //   </div>
    // </Container>

    <Container>
      <div className="imgContainer">
        <img
          src={`${data?.thumbnail?.path}.${data?.thumbnail?.extension}`}
          // src="https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png"
          alt={data?.name}
        />
      </div>
      <div className="nameContainer">
        <span>{data?.name}</span>
        {/* <span>Rodrigo Correia Godoy</span> */}
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
