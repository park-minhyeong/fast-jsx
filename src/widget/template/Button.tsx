import { OnClick } from "../../interface/OnClick";
import { cn } from "../../util";

export interface ButtonProps {
  title: string;
  onClick: OnClick;
  option?: {
    width?: string;
    height?: string;
    background?: string;
    textColor?: string;
    font?: string;
    boundary?: string;
    pressure?: string;
  };
}

export default function Button(props: ButtonProps) {
  const { background, textColor, font, width, height, boundary, pressure } =
    props.option ?? {};
  const container = {
    displays: "flex justify-center items-center",
    backgrounds: background ?? "bg-black ",
    texts: textColor ?? "text-white",
    fonts: font ?? "text-xs",
    sizes: width || height ? cn(width, height) : "px-2.5 py-0.5 ",
    boundaries: boundary ?? "rounded-md",
    pressures: pressure,
  };
  return (
    <button onClick={props.onClick} className={cn(container)}>
      {props.title}
    </button>
  );
}
