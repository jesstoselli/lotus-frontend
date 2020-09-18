import styled from 'styled-components';
import { shade } from 'polished';

import HeroImg from '../../assets/hero-img.png';

export const Container = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Hero = styled.div`
  width: 1200px;
  height: 27rem;
  margin-top: 70px;
  background: url(${HeroImg}) no-repeat border-box;
  border-bottom: 5px solid #907cb8;

  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    margin: 0 8rem;
    width: 23rem;

    h1 {
      font-family: Asap;
      font-weight: 600;
      font-size: 3.5rem;
      line-height: 4.125rem;
      color: #5b4373;

      text-shadow: 0px 4px 4px rgba(231, 231, 231, 0.79);
    }

    h3 {
      font-family: 'Asap Condensed';
      font-size: 1.75rem;
      line-height: 2rem;
      color: #5b4373;
      margin: 1rem 0;
    }

    button {
      width: 12rem;
      height: 3rem;
      font-family: 'Asap Condensed';
      font-weight: 500;
      font-size: 1.1rem;
      color: #ffffff;
      background: #907cb8;
      border-radius: 25px;
      border: 0;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#907cb8')};
      }
    }
  }
`;

export const Content = styled.div`
  width: 1200px;
  height: 37rem;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    p {
      width: 30rem;

      font-family: 'Asap Condensed';
      font-weight: 500;
      font-size: 1.5rem;
      line-height: 2rem;
      text-align: right;

      color: #5b4373;
    }

    img {
      width: 21rem;
      height: 21rem;
    }
  }
`;
