import styled from 'styled-components';
import { shade } from 'polished';

interface ButtonProps {
  backgroundColor?: string;
  color?: string;
}

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;

  margin-top: 1.5rem;

  width: 21rem;
  height: 3.5rem;

  background: ${props =>
    props.backgroundColor ? props.backgroundColor : '#907cb8'};

  border-radius: 8px;

  font-family: 'Asap';
  font-weight: 600;
  font-size: 1.25rem;
  color: ${props => (props.color ? props.color : ' #ffffff')};

  margin-bottom: 1rem;

  &:hover {
    background: ${props =>
      props.backgroundColor
        ? shade(0.2, props.backgroundColor)
        : shade(0.2, '#907cb8')};
  }
`;
