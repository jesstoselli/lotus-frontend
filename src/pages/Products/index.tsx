import React from 'react';

// Images
import NailsImg01 from '../../assets/mkt-images/service-nails-01.png';
import NailsImg02 from '../../assets/mkt-images/service-nails-02.png';
import NailsImg03 from '../../assets/mkt-images/service-nails-03.png';
import HairsImg01 from '../../assets/mkt-images/service-hair-01.png';
import HairsImg02 from '../../assets/mkt-images/service-hair-02.png';
import HairsImg03 from '../../assets/mkt-images/service-hair-03.png';
import EyebrownsImg01 from '../../assets/mkt-images/service-eyebrows-01.png';
import EyebrownsImg02 from '../../assets/mkt-images/service-eyebrows-02.png';

import { Container, Content, Images, ImagesWhite } from './styles';

const Products: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>nossos serviços</h1>
        <hr />
        <Images>
          <p>manicure, pedicure e spa dos pés</p>
          <div>
            <img src={NailsImg01} alt="Unhas vermelhas" />
            <img src={NailsImg02} alt="Unhas coloridas" />
            <img src={NailsImg03} alt="Unhas nudes" />
          </div>
        </Images>
        <hr />
        <ImagesWhite>
          <div>
            <img src={HairsImg01} alt="Cabelos feitos" />
            <img src={HairsImg02} alt="Cabelos feitos" />
            <img src={HairsImg03} alt="Cabelos feitos" />
          </div>
          <p>corte, tintura, balaiagem e muito mais!</p>
        </ImagesWhite>
        <hr />
        <Images>
          <p>design de sobrancelhas, henna, lash lifiting e depilação</p>
          <div>
            <img src={EyebrownsImg01} alt="Design de sobrancelhas" />
            <img src={EyebrownsImg02} alt="Design de sobrancelhas" />
          </div>
        </Images>
        <hr />
      </Content>
    </Container>
  );
};

export default Products;
