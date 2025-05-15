import { cn } from "../../../../util";
import { MenuProps } from "../interface";

export default function DashboardMenu(props: MenuProps) {
  const { menus, option } = props ?? {};
  const container = {
    sizes: "w-64 h-full",
    borders: "border-2 border-green-dark",
  };
  const menuBox = {
    sizes: "w-full h-24",
    texts: "text-black",
  };
  return (
    <div className={cn(container)}>
      {menus.map((menu) => (
        <div key={menu.name} className={cn(menuBox)}>
          {menu.name}
        </div>
      ))}
    </div>
  );
}
