import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px;
  // gap: 4px;
`;

export const PageWrapper = styled.article`
  width: 100%;
  min-height: 100vh;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.large};
  box-sizing: border-box;
`;

export const WarningMessage = styled.p`
  color: white;
  font-style: italic;
  font-size: 20px;
  margin-top: 5px;
`;

export const LoadingMessage = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  margin-top: 5px;
`;
