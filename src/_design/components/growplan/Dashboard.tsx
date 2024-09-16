import { ReactNode, useEffect } from "react";
import { cn } from "../../../util";
import classNames from "../../../util/classNames";
import { useLocation, useNavigate } from "react-router-dom";
import { Header } from "../../app/growplan/layout";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const container = {
    displays: "flex gap-x-3.5",
    boundaries: "p-3.5",
  };
  const body = {
    displays: "flex flex-col",
    sizes: "w-full h-[600px]",
  };
  return (
    <div>
      <Header />
      <div className={cn(container)}>
        <Menu />
        <div className={cn(body)}>{children}</div>
      </div>
    </div>
  );
}

function Menu() {
  const router = useNavigate();
  const location = useLocation();

  const routes = [
    {
      title: "홈",
      href: "/growplan/dashboard",
    },
    {
      title: "측정",
      href: "/growplan/dashboard/measure",
    },
    {
      title: "기록",
      href: "/growplan/dashboard/records",
    },
    {
      title: "설정",
      href: "/growplan/dashboard/config",
    },
  ];
  const container = {
    positions: "fixed bottom-0 left-0 md:static",
    displays: "flex md:flex-col gap-y-0.5",
    backgrounds: "bg-white",
    sizes: "w-full md:w-[16%] min-w-32",
  };
  const button = (isSelected: boolean) => ({
    displays: "flex justify-start",
    sizes: "w-full md:w-auto",
    boundaries: "pl-3.5 py-1.5 rounded-md",
    backgrounds: isSelected ? "bg-[#4163f6]" : "hover:bg-[#4163f6]/10",
    texts: isSelected ? "text-white" : "text-[#4163f6]",
    animations: "duration-500",
  });
  return (
    <div className={classNames(container)}>
      {routes.map(({ title, href }) => (
        <button
          onClick={() => {
            router(href);
          }}
          className={cn(button(location.pathname === href))}
        >
          {title}
        </button>
      ))}
    </div>
  );
}
