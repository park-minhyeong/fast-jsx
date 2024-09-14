import { Dispatch, SetStateAction } from "react";

/**
 * State type for the React component
 * @template T
 * @description - State type for the component
 * @property {T} 0 - State value
 * @property {Dispatch<SetStateAction<T>>} 1 - State setter
 * @example
 * const [state, setState] = useState<T>(initialState);
 * @typedef {Array<T, Dispatch<SetStateAction<T>>>} State
 */
export type StateAction<T> = Dispatch<SetStateAction<T>>;
export type State<T> = [T, StateAction<T>];

/**
 * Size type
 * @enum {string}
 * @readonly
 * @description - Size type for the component
 * @property {"5xs"} 5xs - Five extra small size
 * @property {"4xs"} 4xs - Four extra small size
 * @property {"3xs"} 3xs - Three extra small size
 * @property {"2xs"} 2xs - Double extra small size
 * @property {"xs"} xs - Extra small size
 * @property {"sm"} sm - Small size
 * @property {"md"} md - Medium size
 * @property {"lg"} lg - Large size
 * @property {"xl"} xl - Extra large size
 * @property {"2xl"} 2xl - Double extra large size
 * @property {"3xl"} 3xl - Three extra large size
 * @property {"full"} full - Full size
 * @property {"full"} full - Full size
 */
export type Size =
  | "xxxs"
  | "xxs"
  | "mmd"
  | "xm"
  | "ml"
  | "5xs"
  | "4xs"
  | "3xs"
  | "2xs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "full"
  | "auto";

/**
 * Image size type
 * @enum {string}
 * @readonly
 * @description - Size type for the image
 * @property {"sub"} sub - Sub size
 * @property {"full"} full - Full size
 */
export type ImageSize = "sub" | "full";

export type Click<REQ = unknown, RES = any> = (prop?: REQ) => RES;
export type OnClick<Request = unknown, Response = unknown> = (
  prop?: Request
) => Response | ((prop?: Request) => Promise<Response>);

export type FileDisplay = string | ArrayBuffer | null;
export type FileRead = File | null;
export type Disabled = boolean | OnClick;
export type IsValid =
  | undefined
  | boolean
  | ((value: string) => boolean | undefined);

export type Scripts = {
  script?: string;
  subscript?: string | string[];
};

export type Titles = {
  title: string;
  subtitle?: string | string[];
  isSub?: boolean;
  color?: string;
  titleColor?: string;
  subtitleColor?: string;
  size?: Size;
  icon?: string;
};

export interface Log<K extends string, T extends string | number> {
  prints: K[];
  logs: { [p in K]: T }[] | undefined;
}

export interface Order {
  orderBy: string;
  orderHow: "asc" | "desc" | "";
}
export type Step = [Titles, boolean];
