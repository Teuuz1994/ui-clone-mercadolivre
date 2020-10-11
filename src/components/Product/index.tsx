import React from 'react';

import tshirtImage from '../../assets/tshirt.png';
import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description
} from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-Shirt" />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection: React.FC = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">
          Compre a garantia com Lorem Ipsum
        </p>
        <p className="description">
          Receba o produto que está esperando ou devolvemos o seu dinheiro
      </p>
      </span>

      <span>
        <p className="title">
          Garantia do vendedor
        </p>
        <p className="description">
          Sem garantia
      </p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
)

const Info: React.FC = () => {
  return (
    <Description>
      <h2>Descrição</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien elit, semper ut nulla et, pellentesque egestas nulla. Etiam blandit porta enim ac tempus. Nunc ullamcorper faucibus ex, sit amet ultrices urna pulvinar eu. Aenean ornare a odio ac posuere. Fusce fringilla orci nec libero faucibus, a placerat nisi faucibus. Integer eu ex quis felis hendrerit consectetur. Nam pharetra, arcu a tincidunt bibendum, nunc est vehicula libero, in semper quam arcu in arcu. Cras hendrerit lacus ac turpis malesuada suscipit. Nunc hendrerit mi sem, quis mollis augue fringilla et. Sed a dignissim libero, ac egestas sapien. Morbi sit amet hendrerit eros, vitae pellentesque nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce rhoncus eget nunc ut hendrerit.
        <br />
        <br />
        Itens inclusos: <br />
        - 1x  LED <br />
        - 1x  LED <br />
        - 1x  LED <br />
        - 1x  LED <br />
        - 1x  LED <br />
        - 1x  LED <br />
        <br />
        Nam vel sem iaculis, aliquam turpis id, venenatis est. Maecenas eget suscipit massa. Praesent nec dui ac nibh eleifend lacinia vitae non velit. Vivamus nec nisi et tellus luctus fermentum. Integer cursus metus vel consectetur rhoncus. Maecenas sit amet ex non ante tincidunt feugiat id id sem. In pellentesque vestibulum maximus. Praesent ac varius dolor, nec mollis odio. Donec luctus eget neque at commodo. Nulla auctor tempor nisi, eu imperdiet turpis. Donec imperdiet tincidunt nisi, eget egestas ligula varius in. Donec lobortis pretium lacus, quis pharetra dui malesuada ut.
      </p>
    </Description>
  );
}

export default Product;
