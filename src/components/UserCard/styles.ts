import styled from "styled-components";

export const UserCardWrapper = styled.div`
  width: 100%; /* Ensures card takes full width of its container */
  max-width: 300px; /* Adjust max-width to match Input width */
  padding: 10px;
  // border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  text-align: center;
  box-sizing: border-box; /* Ensure padding and border are included in the width */
`;

export const UserCardImage = styled.img`
  width: 100%;
  border-radius: 75px;
`;

export const UserCardName = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSizes.medium};
  color: white;
  font-size: 25px;
  margin: 7px 0 0 0;
`;
