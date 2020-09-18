import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import { Container, Content, FullButton, SkeletonButton } from './styles';

import Menu from '../../assets/hamburger-menu.svg';
import logoImg from '../../assets/lotus-logo.png';

const Header: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <Content>
        <header>
          <div>
            <img id="menu" src={Menu} alt="Menu" />
            <NavLink to="/">
              <img id="logo" src={logoImg} alt="Logo" />
            </NavLink>
            <nav>
              <NavLink to="servicos" activeClassName="active">
                Serviços
              </NavLink>
              <NavLink to="horarios" activeClassName="active">
                Horários
              </NavLink>
              <NavLink to="/" exact activeClassName="active">
                Quem Somos
              </NavLink>
              <SkeletonButton
                type="button"
                onClick={() => history.push('/login')}
              >
                login
              </SkeletonButton>
              <FullButton
                type="button"
                onClick={() => history.push('/cadastro')}
              >
                cadastre-se
              </FullButton>
            </nav>
          </div>
        </header>
      </Content>
    </Container>
  );
};

export default Header;
