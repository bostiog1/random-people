import styled from "styled-components";
import { ButtonVariants } from "./types";
import { Theme } from "../../theme/types";

const getButtonStyles = (theme: Theme, variant?: ButtonVariants) => {
  switch (variant) {
    case "primary":
      return `
          background: ${theme.colors.buttonBackground};
          color: ${theme.colors.white};
        `;
    case "secondary":
      return `
          background: transparent;
          color: ${theme.colors.buttonBackground};
          border: 1px solid ${theme.colors.buttonBackground};
        `;
    default:
      return "";
  }
};

export const StyledButton = styled.button<{ variant?: ButtonVariants }>`
  padding: ${({ theme }) => theme.spacing.medium};
  font-size: ${({ theme }) => theme.typography.fontSizes.medium};
  border: none;
  border-radius: 30px;
  cursor: pointer;
  min-width: 120px;
  margin: ${({ theme }) => theme.spacing.small};
  transition: background 0.2s, border-color 0.2s, box-shadow 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.buttonHoverBackground};
    border-color: ${({ theme }) => theme.colors.buttonHoverBackground};
    opacity: 0.9;
  }

  &:focus {
    outline: none;
    // box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.accent};
  }

  ${({ theme, variant }) => getButtonStyles(theme as Theme, variant)}
`;
