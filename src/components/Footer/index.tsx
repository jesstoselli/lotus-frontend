import React from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram, FiLinkedin } from 'react-icons/fi';
import { RiPhoneFill, RiMapPin2Line } from 'react-icons/ri';
import { FaFacebook } from 'react-icons/fa';
import { SiGithub, SiWhatsapp } from 'react-icons/si';

import { Container, Content, Credits } from './styles';

import logoWhiteBg from '../../assets/logo-whiteBg.png';

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoWhiteBg} alt="Logo" />
        <div className="links">
          <Link to="/">Quem Somos</Link>
          <Link to="servicos">Serviços</Link>
          <Link to="horarios">Horários</Link>
          <Link to="contato">Contato</Link>
        </div>
        <div className="contacts">
          <span>
            <RiMapPin2Line /> Rua Conde de Bonfim, 987 Tijuca, Rio de Janeiro.
          </span>
          <span>
            <SiWhatsapp /> (21) 98569-2147
          </span>
          <span>
            <RiPhoneFill /> (21) 2571-3887
          </span>
        </div>
        <div className="social">
          <p>redes sociais</p>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram />
          </a>
        </div>
        <div className="designed-by">
          <p>
            projeto desenvolvido por <strong>JessTo</strong>
          </p>
          <div>
            <a
              href="https://github.com/jesstoselli"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jessyca-toselli/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://wa.me/5521984841825"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiWhatsapp />
            </a>
          </div>
        </div>
      </Content>
      <Credits>
        Lotus Beauty Lounge ® Todos os direitos reservados | Copyright ⓒ 2020.
      </Credits>
    </Container>
  );
};

export default Footer;
