import { FC } from "react";
import { UserCardWrapper, UserCardImage, UserCardName } from "./styles";

interface UserCardProps {
  image: string;
  firstName: string;
  lastName: string;
}

export const UserCard: FC<UserCardProps> = ({ image, firstName, lastName }) => (
  <UserCardWrapper>
    <UserCardImage src={image} alt={`${firstName} ${lastName}`} />
    <UserCardName>
      {firstName} {lastName}
    </UserCardName>
  </UserCardWrapper>
);
