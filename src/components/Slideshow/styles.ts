import styled from "styled-components";

export const SlideshowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.medium};
`;

export const SlideshowControls = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 300px;
  margin-top: ${({ theme }) => theme.spacing.small};
`;
