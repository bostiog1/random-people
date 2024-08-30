import { FC, ChangeEvent } from "react";
import { StyledInput } from "./styles";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const Input: FC<Props> = ({ value, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return <StyledInput value={value} onChange={handleChange} />;
};
