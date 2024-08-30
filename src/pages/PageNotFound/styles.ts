import styled from "styled-components";

export const PageWrapper = styled.article`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.large};
  box-sizing: border-box;
`;


export const NotFoundMessage = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

