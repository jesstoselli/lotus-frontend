import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 1200px;
  margin-top: 70px;
  margin-bottom: 5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-family: 'Asap';
    font-weight: 600;
    font-size: 2.625rem;
    color: #5b4373;

    margin-top: 3.75rem;
    margin-bottom: 1.25rem;
  }

  h3 {
    width: 24rem;
    font-family: 'Asap Condensed';
    font-weight: 500;
    font-size: 1.625rem;
    line-height: 2.25rem;

    color: #907cb8;
  }
`;

export const InputBox = styled.div`
  align-self: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 29rem;
  height: 26rem;

  margin: 3rem 0;

  background: rgba(241, 241, 241, 0.6);
  border-radius: 20px;

  a {
    font-family: 'Asap Condensed';
    font-size: 1.1rem;

    color: #9c98a6;

    &:hover {
      color: ${shade(0.2, '#9c98a6')};
    }
  }
`;
