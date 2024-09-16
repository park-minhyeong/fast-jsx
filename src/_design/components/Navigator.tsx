import { create } from "zustand";
import { cn } from "../../util";
interface Store {
  isOpen: boolean;
}

export default function Navigator() {
  const container = {
    positions: "fixed top-5 right-7.5",
    displays: "flex flex-row gap-x-3.5",
  };
  return (
    <div className={cn(container)}>
      <button onClick={() => {}}>About</button>
      <button>Project</button>
      <button>Docs</button>
    </div>
  );
}
