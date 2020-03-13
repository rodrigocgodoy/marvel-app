import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { Container } from './styles';

export default function CardLoading() {
  return (
    <Container>
      <div className="imgContainer">
        <Skeleton width={110} height={95} count={1} />
      </div>
      <div className="nameContainer">
        <Skeleton width={200} height={30} count={1} />
      </div>
    </Container>
  );
}
