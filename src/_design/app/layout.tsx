import { ReactNode } from "react";
import { cn } from "../../util";

export default function RootLayout({ children }: { children: ReactNode }) {
  const container = {
    displays: "flex flex-col justify-center items-center",
    sizes: "w-full min-h-screen",
  };
  return <div className={cn(container)}>{children}</div>;
}
