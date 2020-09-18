import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 14rem;

  background-color: #907cb8;
  color: #f9f9f9;

  @media (min-width: 48rem) {
    height: 16rem;
  }
`;

export const Content = styled.div`
  width: 90%;
  padding: 1rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 128px;
    height: 47px;
  }

  div.links {
    display: none;
  }

  div.contacts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 15rem;
    margin-left: 3rem;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 1.5rem;
      font-size: 1rem;

      svg {
        width: 20px;
        height: 20px;
        margin-right: 1rem;
      }

      & + span {
        margin-top: 0.5rem;
      }
    }
  }

  div.social {
    display: none;
  }

  div.designed-by {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;

    width: 6rem;
    margin-left: 3rem;

    p {
      font-family: 'Asap Condensed';
      font-size: 1rem;
      line-height: 1.125rem;
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      /* text-align: right; */

      width: 5rem;

      a {
        margin-top: 0.75rem;
        color: #f9f9f9;

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  @media (min-width: 48rem) {
    width: 1200px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    div.links {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      margin-left: 3rem;

      a {
        color: #f9f9f9;

        & + a {
          margin-top: 1rem;
        }

        &:hover {
          color: ${shade(0.2, '#f9f9f9')};
        }
      }
    }

    div.contacts {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 13.5rem;
      margin-left: 3rem;

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 1.5rem;

        svg {
          width: 20px;
          height: 20px;
          margin-right: 1rem;
        }

        & + span {
          margin-top: 1rem;
        }
      }
    }

    div.social {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      margin-left: 3rem;

      p {
        font-family: 'Asap Condensed';
        font-size: 1.25rem;
      }

      a {
        margin-top: 0.75rem;
        color: #f9f9f9;

        svg {
          width: 24px;
          height: 24px;
          margin-top: 1.2rem;

          &:hover {
            width: 28px;
            height: 28px;
          }
        }
      }
    }

    div.designed-by {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      text-align: right;

      width: 6rem;
      margin-left: 3rem;

      p {
        font-family: 'Asap Condensed';
        font-size: 1rem;
        line-height: 1.125rem;
      }

      div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        text-align: right;

        a {
          margin-top: 0.75rem;
          color: #f9f9f9;

          svg {
            width: 20px;
            height: 20px;

            &:hover {
              width: 24px;
              height: 24px;
            }
          }
        }
      }
    }
  }
`;

export const Credits = styled.p`
  font-family: 'Asap Condensed';
  font-size: 0.7rem;
  margin: 0.75rem 0;

  color: #ffffff;

  @media (min-width: 48rem) {
    font-size: 1rem;
  }
`;
