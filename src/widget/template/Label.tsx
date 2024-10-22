import { cn } from "../../util";

interface LabelProps {
  title: string;
  option?: {
    position?: string;
    width?: string;
    height?: string;
    background?: string;
    textColor?: string;
    font?: string;
    boundary?: string;
    pressure?: string;
  };
}

export default function Label(props: LabelProps) {
  const {
    position,
    background,
    textColor,
    font,
    width,
    height,
    boundary,
    pressure,
  } = props.option ?? {};
  const container = {
    positions: position,
    displays: "flex justify-center items-center",
    backgrounds: background ?? "bg-black ",
    texts: textColor ?? "text-white",
    fonts: font ?? "text-xs",
    sizes: width || height ? cn(width, height) : "px-2.5 py-0.5 ",
    boundaries: boundary ?? "rounded-md",
    pressures: pressure,
  };
  return <div className={cn(container)}>{props.title}</div>;
}
