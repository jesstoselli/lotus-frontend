import styled, { css } from 'styled-components';

import ArrowDown from '../../assets/arrowdown.svg';

interface ContainerProps {
  isFocused: boolean;
  width?: string;
}

export const Container = styled.label<ContainerProps>`
  width: ${props => (props.width ? props.width : '100%')};

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

    ${props =>
      props.isFocused &&
      css`
        border: 2px solid #5b4373;
      `}
  }
`;
