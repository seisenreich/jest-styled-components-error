import React from "react";
import styled from "styled-components";

export interface ButtonProps {
  label: string;
  color: string;
}

const Button = ({ label, ...rest }: ButtonProps) => {
  const StyledButton = styled.button`
    background-color: #000000;
    color: ${({ color }) => color};
    &:hover,
    &:active,
    &:focus {
      background-color: #111111;
      color: ${({ color }) => color};
    }
    &:focus {
      outline: 0;
    }
  `;

  return <StyledButton {...rest}>{label}</StyledButton>;
};

export default Button;
