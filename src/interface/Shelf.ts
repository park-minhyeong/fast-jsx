import { ActionProps } from "./Action";
import { Titles } from "./Property";

interface Option<T> {
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
export interface ShelfDesignProps<T> {
  children: React.ReactNode;
  action?: ActionProps;
  titles?: Titles;
  debug?: string;
  className?: string;
  option?: Option<T>;
}
