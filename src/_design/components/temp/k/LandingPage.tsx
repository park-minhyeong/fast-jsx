import { cn } from "../../../../util";

export default function LandingPage() {
  const container = {
    displays: "flex flex-col",
  };
  return (
    <div className={cn(container)}>
      <div className="flex w-full h-80 border-2 border-red-500">
        <div>A</div>
        <div>B</div>
      </div>
    </div>
  );
}
