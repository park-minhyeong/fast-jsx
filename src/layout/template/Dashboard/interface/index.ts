import { ReactNode } from "react";
import { StyleOption } from "../../../../interface";

interface DashboardProps {
  children: ReactNode;
  header: HeaderProps;
  menu: MenuProps;
}

interface HeaderProps {
  title: string;
  option?: StyleOption;
}

interface Menu {
  name: string;
  link?: string;
}

interface MenuProps {
  menus: Menu[];
  option?: StyleOption;
}

export type { DashboardProps, HeaderProps, Menu, MenuProps };
