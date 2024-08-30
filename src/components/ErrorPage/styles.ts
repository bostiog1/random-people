import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.large};
  box-sizing: border-box;
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-style: italic;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const HomeLink = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: ${({ theme }) => theme.spacing.medium};
  font-size: ${({ theme }) => theme.typography.fontSizes.medium};
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
