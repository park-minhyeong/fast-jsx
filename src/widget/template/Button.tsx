import { OnClick } from "../../interface/OnClick";
import { cn } from "../../util";

interface ButtonProps {
  title: string;
  onClick: OnClick;
  option?: {
    background?: string;
    text?: string;
  };
}
export default function Button({ title, onClick, option }: ButtonProps) {
  const { background, text } = option ?? {};
  const container = {
    displays: "flex justify-center items-center",
    backgrounds: background ?? "bg-black ",
    texts: text ?? "text-white",
    fonts: "text-xs",
    boundaries: "px-2.5 py-0.5 rounded-md",
  };
  return (
    <button onClick={onClick} className={cn(container)}>
      {title}
    </button>
  );
}
