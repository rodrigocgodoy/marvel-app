import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { Container } from './styles';

export default function CardLoading() {
  return (
    <Container>
      <div className="imgContainer">
        <Skeleton width={250} height={250} count={1} />
      </div>
      <div className="nameContainer">
        <Skeleton width={100} height={30} count={1} />
      </div>
      <div className="descriptionContainer">
        <Skeleton width={400} height={10} count={4} />
      </div>
    </Container>
  );
}
