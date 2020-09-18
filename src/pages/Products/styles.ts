import styled from 'styled-components';
// import { shade } from 'polished';

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

    margin: 3.75rem 0;
  }

  hr {
    border: 3px solid #907cb8;
  }
`;

export const Images = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: rgba(144, 124, 184, 0.5);

  padding: 0 6rem;

  p {
    width: 11rem;
    font-family: 'Asap Condensed';
    font-size: 1.75rem;
    line-height: 2.375rem;
    color: white;
    margin-left: 1.5rem;
  }

  div {
    width: 60%;
    margin: 3rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

    img {
      margin: 0;
      padding: 0;
      height: 14rem;
      border-radius: 8px;
    }
  }
`;

export const ImagesWhite = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: rgba(249, 249, 249, 0.3);

  padding: 0 6rem;

  p {
    width: 10rem;
    font-family: 'Asap Condensed';
    font-size: 1.75rem;
    line-height: 2.375rem;
    color: #907cb8;
    text-align: right;
    margin-right: 1.5rem;
  }

  div {
    width: 60%;
    margin: 3rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

    img {
      margin: 0;
      padding: 0;
      height: 14rem;
      border-radius: 8px;
    }
  }
`;
