import { ReactNode } from "react";
import { Scripts, Size, State, Titles } from "./Property";
import { ShowAction } from "./Action";
import { ButtonProps } from "../widget/template/Button";
// import {
//   InputWidget,
//   SelectHandleProps,
//   SelectPaginationProps,
//   SelectSwitchProps,
//   SelectTagProps,
// } from "./widget";

interface Option {
  className?: string;
  width: Size;
  height: Size;
  padding: boolean;
  boundary: string;
  buttons: ButtonProps[];
  position: string;
  noClose: boolean;
  noBackground: boolean;
  isShadow: boolean;
}

interface ModalProps {
  titles: Titles;
  children: ReactNode;
  showAction?: ShowAction;
  option?: Partial<Option>;
  debug?: string;
}

// 스위치

export type { ModalProps };
