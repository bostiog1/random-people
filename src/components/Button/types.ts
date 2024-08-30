import { MouseEventHandler, ReactNode } from "react";

export type ButtonVariants = "primary" | "secondary";

export interface ButtonProps {
  children?: ReactNode;
  ariaLabel: string;
  variant?: ButtonVariants;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
