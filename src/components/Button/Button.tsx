import { FC } from "react";
import { StyledButton } from "./styles";
import { ButtonProps } from "./types";

export const Button: FC<ButtonProps> = ({
  children,
  ariaLabel,
  variant,
  onClick,
}) => (
  <StyledButton aria-label={ariaLabel} variant={variant} onClick={onClick}>
    {children}
  </StyledButton>
);
