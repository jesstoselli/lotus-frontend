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

  div.white {
    background: rgba(249, 249, 249, 0.3);

    h3 {
      color: #907cb8;
    }

    ul {
      li {
        color: #907cb8;
      }
    }
  }
`;

export const Images = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: rgba(144, 124, 184, 0.5);

  padding: 0 6rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;

    h3 {
      width: 11rem;
      font-family: 'Asap Condensed';
      font-size: 2rem;
      color: white;
      margin-bottom: 2rem;
    }

    ul {
      li {
        width: 20rem;
        font-family: 'Asap Condensed';
        font-size: 1.5rem;
        line-height: 2.125rem;
        color: white;
        margin-left: 1.5rem;
        margin-bottom: 1rem;
      }
    }
  }

  img {
    margin: 3rem 0;
    height: 14rem;
    border-radius: 8px;
  }
`;
