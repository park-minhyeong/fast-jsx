import { cn } from "../../../../util";
import Header from "../../../components/temp/k/Header";
import LandingPage from "../../../components/temp/k/LandingPage";

export default function SomeProject() {
  const container = {
    displays: "flex flex-col",
    sizes: "w-full min-h-screen",
  };
  return (
    <div className={cn(container)}>
      <Header />
      <LandingPage />
    </div>
  );
}
