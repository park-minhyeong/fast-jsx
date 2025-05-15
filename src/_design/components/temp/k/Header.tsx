import { cn } from "../../../../util";
import { Button } from "../../../..";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const container = {
    positions: "fixed top-0 left-0",
    sizes: "w-full h-16",
    backgrounds: "bg-white",
    displays: "flex justify-between items-center",
    styles: "shadow-md",
    boundaries: "px-3.5",
  };
  const router = useNavigate();

  return (
    <>
      <div className={cn(container)}>
        <div>PROJECT K</div>
        <div className="flex">
          <Button name="some" onClick={() => router("/temp/k/dashboard")} />
        </div>
      </div>
      <div className={cn(container.sizes)} />
    </>
  );
}
