import React from 'react';

// Images
import Nails from '../../assets/mkt-images/manicure.png';
import HairProducts from '../../assets/mkt-images/hair-products.png';
import EyebrowDesign from '../../assets/mkt-images/eyebrow-design.png';

import { Container, Content, Images } from './styles';

const Schedule: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>nossos horários</h1>
        <hr />
        <Images>
          <div>
            <h3>manicure</h3>
            <ul>
              <li>terças e quartas - das 10h às 18h</li>
              <li>quintas e sextas - das 9h às 19h</li>
              <li>sábados - das 10h às 16h</li>
            </ul>
          </div>
          <img src={Nails} alt="Manicure" />
        </Images>
        <hr />
        <Images className="white">
          <img src={HairProducts} alt="Produtos para cabelos" />
          <div>
            <h3>cabeleireiros</h3>
            <ul>
              <li>terças e quartas - das 13h às 18h</li>
              <li>quintas e sextas - das 10h às 19h</li>
              <li>sábados - das 12h às 16h</li>
            </ul>
          </div>
        </Images>
        <hr />
        <Images>
          <div>
            <h3>esteticistas</h3>
            <ul>
              <li>terças e quartas - das 14h às 18h</li>
              <li>quintas e sextas - das 12h às 19h</li>
              <li>sábados - das 10h às 16h</li>
            </ul>
          </div>
          <img src={EyebrowDesign} alt="Design de sobrancelhas" />
        </Images>
        <hr />
      </Content>
    </Container>
  );
};

export default Schedule;
