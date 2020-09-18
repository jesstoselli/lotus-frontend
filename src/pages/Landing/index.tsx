import React from 'react';

import experienciaLotus from '../../assets/experiencialotus.svg';

import { Container, Hero, Content } from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <Hero>
        <div>
          <h1>cuidados para mãos e pés</h1>
          <h3>embelezamento e spa</h3>
          <button type="button">agende seu horário</button>
        </div>
      </Hero>
      <Content>
        <div>
          <p>
            O Lotus Beauty Lounge oferece serviços de qualidade com atendimento
            personalizado e exclusivo para embelezar e se relacionar com cada
            cliente. Nosso ambiente é todo pensado para que seu momento conosco
            seja de relaxamento e qualidade.
          </p>
          <img src={experienciaLotus} alt="Viva a experiência Lotus" />
        </div>
      </Content>
    </Container>
  );
};

export default Landing;
