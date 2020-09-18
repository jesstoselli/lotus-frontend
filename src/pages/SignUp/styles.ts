import styled from 'styled-components';
// import { shade } from 'polished';

import ArrowDown from '../../assets/arrowdown.svg';

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
  align-items: center;

  header {
    width: 72rem;
    display: flex;
    flex-direction: column;

    justify-content: flex-start;
    align-items: flex-start;

    h1 {
      font-family: 'Asap';
      font-weight: 600;
      font-size: 2.625rem;
      color: #5b4373;

      margin-top: 3.75rem;
      margin-bottom: 1.25rem;
    }

    h3 {
      width: 36rem;
      font-family: 'Asap Condensed';
      font-weight: 500;
      font-size: 1.625rem;
      line-height: 2.25rem;
      color: #907cb8;
    }
  }
`;

export const InputBox = styled.div`
  align-self: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 72rem;
  height: 40rem;

  margin: 3rem 0;

  background: rgba(241, 241, 241, 0.6);
  border-radius: 20px;

  div {
    width: 66rem;
    display: flex;
    justify-content: space-between;

    label {
      width: 10rem;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;

      font-family: 'Asap Condensed';
      align-self: right;
      font-size: 1.25rem;
      color: #907cb8;

      select {
        -webkit-appearance: none;
        -moz-appearance: none;
        height: 4rem;
        width: 10rem;
        padding: 1rem;
        margin-top: 0.8rem;
        border: 1px solid #e6e6f0;
        border-radius: 0.8rem;
        font: 1.25rem 'Asap Condensed';
        color: #5b4373;

        background: #f9f9f9;
        background-image: url(${ArrowDown});
        background-repeat: no-repeat;
        background-position-x: 95%;
        background-position-y: 15px;
      }
    }
  }
`;
