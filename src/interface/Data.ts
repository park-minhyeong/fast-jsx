import { Replace } from "./Action";
import { Click, OnClick, State, StateAction, Titles } from "./Property";

export interface DataPackage<T> {
  dataField: DataField<T>;
  dataSet: Omit<DataSet<T>, "renderItem">;
}

export type DataSet<T = any> = {
  items?: T[];
  renderItem: (item: T, index?: number) => React.ReactNode;
  titles?: Titles;
  interaction?: React.ReactNode;
  onClick?: OnClick<T>;
  replaces?: Replace[];
};

type DataFieldProps<T> = {
  title: string | number;
  size: string | number;
  data?: DataFieldType<T>;
};

export type DataField<T = any> = Partial<{
  [p in keyof T]: Partial<DataFieldProps<T>>;
}>;

export type DataFieldType<T> =
  | DataFiledTypeText
  | DataSelectRoll
  | DataButton<T>;
// NOTE: DataFields
type DataFiledTypeText = {
  type: "text";
};
interface SelectRollOption {
  key: string;
  value: string;
  option?: {
    text?: string;
    background?: string;
  };
}
type DataSelectRoll = {
  type: "selectRoll";
  options: SelectRollOption[];
};
function isDataSelectRoll(obj: any): obj is DataSelectRoll {
  return typeof obj === "object" && obj.type === "selectRoll";
}
type DataButton<T> = {
  type: "button";
  onClick: OnClick<T>;
  hoverTitle?: Click<T, string> | string;
  option?: {
    text?: Click<T, string> | string;
    background?: Click<T, string> | string;
  };
};
function isDataButton<T>(obj: any): obj is DataButton<T> {
  return typeof obj === "object" && obj.type === "button";
}

export type { DataFiledTypeText, DataSelectRoll };
export { isDataSelectRoll, isDataButton };
