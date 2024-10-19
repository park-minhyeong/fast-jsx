import { ReactNode } from "react";
import { cn } from "../../../util";
import { Button } from "../../../widget";
import { useNavigate, useLocation } from "react-router-dom";

export default function GrowPlanLayout({ children }: { children: ReactNode }) {
  const path = useLocation().pathname;
  const container = {
    displays: "flex flex-col ",
    sizes: "w-full min-h-screen",
    fonts: "font-pretendard-var antialiased",
    styles: "scrollbar-hidden",
  };

  const whitelist = ["/growplan/sign-in", "/growplan/sign-up"];
  if (whitelist.includes(path)) return <>{children}</>;
  return (
    <div className={cn(container)}>
      <Header />
      {children}
    </div>
  );
}

export function Header() {
  const container = {
    positions: "fixed top-0 left-0",
    displays: "flex justify-between items-center",
    backgrounds: "bg-white",
    sizes: "w-full h-16",
    boundaries: "px-4",
    styles: "shadow-md",
  };
  const router = useNavigate();
  const location = useLocation();
  const isDashboard = location.pathname === "/growplan/dashboard";
  return (
    <>
      <div className="h-16" />
      <div className={cn(container)}>
        <img
          src="/images/growplan/logo.png"
          onClick={() => router("/growplan")}
          width={100}
        />
        <Button
          title={isDashboard ? "홈으로" : "대시보드"}
          onClick={() =>
            router(isDashboard ? "/growplan" : "/growplan/dashboard")
          }
          option={{
            background: "bg-[#4163f6]",
          }}
        />
      </div>
    </>
  );
}
