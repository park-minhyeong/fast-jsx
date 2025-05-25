import { ReactNode } from "react";

interface Style {
  width: string;
  height: string;
  border: string;
  font: string;
  background: string;
  textColor: string;
  pressure: string;
  position: string;
  radius: string;
  padding: string;
  custom: string;
  leftNode?: ReactNode;
  rightNode?: ReactNode;
}

interface StyleOption extends Partial<Style> { }

export type { StyleOption };
