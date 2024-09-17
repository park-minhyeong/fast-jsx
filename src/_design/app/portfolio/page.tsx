import { cn } from "../../../util";
import Terminal from "../../components/portfolio/Terminal";

export default function PortfolioPage() {
  const container = {
    displays: "flex flex-col justify-center items-center",
    sizes: "w-full min-h-screen",
  };
  return (
    <div className={cn(container)}>
      <Terminal />
    </div>
  );
}
