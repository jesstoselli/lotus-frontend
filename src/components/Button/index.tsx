import React, { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  backgroundColor,
  color,
}) => {
  return (
    <StyledButton backgroundColor={backgroundColor} color={color}>
      {children}
    </StyledButton>
  );
};

export default Button;
