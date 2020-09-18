import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.main`
  width: 100%;

  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;

  height: 90px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: calc(100% - 50px);
    height: 100%;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      img#menu {
        width: 78px;
        height: 42px;
        filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1));
      }

      img#logo {
        width: 201px;
        height: 67px;
      }

      nav {
        display: none;
      }
    }
  }

  @media (min-width: 48rem) {
    height: 70px;

    header {
      width: 1200px;

      img#menu {
        display: none;
        visibility: hidden;
      }

      div {
        img {
          width: 180px;
          height: 100%;
        }

        nav {
          display: block;
          display: flex;
          align-items: center;
          justify-content: space-between;

          a {
            color: #907cb8;
            font-family: Asap Condensed;
            font-size: 1.1rem;

            & + a {
              margin-left: 2rem;
            }

            &:hover {
              color: ${shade(0.2, '#907cb8')};
            }
          }

          a.active {
            border-bottom: 2px solid #907cb8;
          }
        }
      }
    }
  }
`;

export const SkeletonButton = styled.button`
  width: 8rem;
  height: 2.5rem;

  font-family: 'Asap Condensed';
  font-weight: 500;
  font-size: 1.1rem;
  color: #907cb8;
  background: #fff;
  border-radius: 25px;
  border: 2px solid #907cb8;
  margin-left: 2rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #907cb8;
    color: #fff;
  }
`;

export const FullButton = styled.button`
  width: 8rem;
  height: 2.5rem;
  font-family: 'Asap Condensed';
  font-weight: 500;
  font-size: 1.1rem;
  color: #ffffff;
  background: #907cb8;
  border-radius: 25px;
  border: 0;
  margin-left: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#907cb8')};
  }
`;
