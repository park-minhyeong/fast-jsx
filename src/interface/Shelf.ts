import { ActionProps } from "./Action";
import { Titles } from "./Property";

interface Option<T> {
  titleSize?: string;
  subtitleSize?: string;
  overflowScroll?: boolean;
  width?: T;
  height?: number;
  gap?: "xy" | "x" | "y" | "none";
  isSize?: boolean;
}
export interface ShelfProps<T> {
  children: React.ReactNode;
  action?: ActionProps;
  titles?: Titles;
  debug?: string;
  className?: string;
  option?: Option<T>;
}
