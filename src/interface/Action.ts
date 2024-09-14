import { DataField } from "./Data";

export interface ActionEvent {
  event: string;
  type: "view" | "modal";
}

type Action<T extends boolean | string | null | undefined> = [
  T,
  React.ReactNode
];
export type Show = Action<boolean | string>;
export type Replace = Action<boolean | string | null | undefined>;
export interface ShowAction {
  event: string;
  isVisible: boolean;
}

export interface ActionProps {
  replaces?: Replace[];
  shows?: Show[];
}
export interface ShowProps {
  widgets?: Show[];
  children: React.ReactNode;
}
export interface ReplaceProps {
  widgets?: Replace[];
  children: React.ReactNode;
}
export interface DataFieldProps<T> {
  id: string;
  dataField?: DataField<T>;
  option?: {
    position?: string;
    padding?: string;
  };
}
