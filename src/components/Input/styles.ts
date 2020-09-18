import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  width?: string;
}

export const Container = styled.main<ContainerProps>`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-start !important;

  label {
    font-family: 'Asap Condensed';
    align-self: right;
    font-size: 1.25rem;
    color: #907cb8;
  }

  input {
    width: ${props => (props.width ? props.width : '100%')};
    height: 4rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: #fafafc;
    border: 1px solid #e6e6f0;
    outline: 0;
    padding: 0 1.6rem;
    font: 1.25rem 'Asap Condensed';
    color: #5b4373;

    margin-bottom: 1.25rem;

    ${props =>
      props.isFocused &&
      css`
        border: 2px solid #5b4373;
      `}

    ::placeholder {
      font-family: 'Asap Condensed';
      font-size: 1rem;
      color: #9c98a6;
    }
  }
`;
