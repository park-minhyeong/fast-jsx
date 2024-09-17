import { useRef, useState } from "react";
import { cn } from "../../../util";

const tabs = [
  {
    name: "Command Prompt",
    icon: "/images/portfolio/terminal.png",
  },
];
export default function Terminal() {
  const ref = useRef<HTMLInputElement>(null);
  const [commands, setCommands] = useState<string[]>([]);
  const [command, setCommand] = useState<string>("");

  const container = {
    positions: "relative",
    displays: "flex flex-col",
    sizes: "w-full max-w-[800px] h-[500px]",
    backgrounds: "bg-black",
    boundaries: "rounded-lg",
    styles: "overflow-hidden",
  };
  const header = {
    positions: "absolute top-0 left-0",
    displays: "flex",
    sizes: "w-full h-9",
    backgrounds: "bg-gray-terminal",
  };
  const tabBox = {
    displays: "flex items-center gap-x-1.5",
    sizes: "w-full max-w-[200px] h-7",
    backgrounds: "bg-black pl-2.5",
    texts: "text-white text-xs",
    boundaries: "rounded-t-lg",
  };
  const body = {
    displays: "flex flex-col gap-y-1.5",
    sizes: "w-full h-full",
    backgrounds: "bg-black",
    texts: "text-white text-sm",
    boundaries: "pt-2.5 px-3.5 pb-12",
    styles: "overflow-y-scroll",
  };

  return (
    <div onClick={() => ref.current?.focus()} className={cn(container)}>
      <div className={cn(header)}>
        <div className="bg-black w-4 h-full">
          <div className="h-full rounded-br-lg bg-gray-terminal w-full" />
        </div>
        <div className="flex items-end w-[400px] h-full">
          {tabs.map(({ name, icon }) => (
            <div className={cn(tabBox)}>
              <img src={icon} width={20} />
              <div>{name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={cn(header.sizes)} />
      <div className={cn(body)}>
        {commands.map((command) => (
          <div className="flex items-end gap-x-3.5 leading-none ">
            <div className="text-green-400">guest@minhyeong {">"}</div>
            <div>{command}</div>
          </div>
        ))}
        <div className="flex items-end gap-x-3.5 leading-none">
          <div className="text-green-400 leading-none">
            guest@minhyeong {">"}
          </div>
          <input
            ref={ref}
            value={command}
            className="bg-transparent text-white outline-none w-auto leading-none cursor-default h-3.5"
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setCommands([...commands, command]);
                return setCommand("");
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
