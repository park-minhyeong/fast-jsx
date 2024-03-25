export interface Order {
  orderBy: string;
  orderHow: "asc" | "desc" | "";
}

export interface WidgetEvent {
  event: string;
  type: "view" | "modal";
}

type Event<T extends boolean | string | null | undefined> = [
  T,
  React.ReactNode
];
export type Show = Event<boolean | string>;
export type Replace = Event<boolean | string | null | undefined>;
export interface ShowProps {
  widgets?: Show[];
  children: React.ReactNode;
}
export interface ReplaceProps {
  widgets?: Replace[];
  children: React.ReactNode;
}

export interface EventsProps {
  replaces?: Event<boolean | string | null | undefined>[];
  shows?: Event<boolean | string>[];
}
