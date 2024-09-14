import { ReactNode } from "react";
import DashboardLayout from "../../../components/Dashboard";
export default function Layout({ children }: { children: ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
