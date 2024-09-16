import { ReactNode } from "react";
import DashboardLayout from "../../../components/growplan/Dashboard";
export default function Layout({ children }: { children: ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
