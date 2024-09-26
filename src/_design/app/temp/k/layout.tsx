import { ReactNode } from "react";
import { cn } from "../../../../util";
import Header from "../../../components/temp/k/Header";

export default function Layout({ children }: { children: ReactNode }) {
  const container = {
    displays: "flex flex-col",
    sizes: "w-full min-h-screen",
  };
  return (
    <div className={cn(container)}>
      <Header />
      {children}
    </div>
  );
}
