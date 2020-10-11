import React from 'react';

import Product from '../Product';
import Footer from '../Footer';
import Header from '../Header';

import { Container, Wrapper } from './styles';

const layout: React.FC = () => {
  return (
    <Container>
      <Header />

      <Wrapper>
        <Product />
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default layout;
