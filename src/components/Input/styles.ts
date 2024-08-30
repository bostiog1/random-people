import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%; /* Ensures input takes full width of its container */
  max-width: 300px; /* Adjust max-width to match UserCard width */
  padding: 10px;
  font-size: ${({ theme }) => theme.typography.fontSizes.medium};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  outline: none;

  // &:focus {
  //   border-color: ${({ theme }) => theme.colors.secondary};
  // }
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.secondary};
  }

  &:not(:focus) {
    border-color: ${({ theme }) => theme.colors.primaryLight};
    box-shadow: none;
  }
`;
