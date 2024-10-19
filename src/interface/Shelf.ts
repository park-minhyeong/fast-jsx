import { ActionProps } from "./Action";
import { Titles } from "./Property";

interface Option {
  titleSize?: string;
  subtitleSize?: string;
  overflowScroll?: boolean;
  width?: string;
  height?: string;
  background?: string;
  boundary?: string;
  pressure?: string;
  display?: string;
  gap?: "xy" | "x" | "y" | "none";
  isSize?: boolean;
}
export interface ShelfDesignProps {
  children: React.ReactNode;
  action?: ActionProps;
  titles?: Titles;
  debug?: string;
  className?: string;
  option?: Option;
}
