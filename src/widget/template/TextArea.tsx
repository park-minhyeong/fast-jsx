import { useRef } from "react";
import { State, StyleOption, Titles } from "../../interface";
import { cn } from "../../util";

interface InputProps {
  state: State<string> | State<string | undefined>;
  placeholder?: string;
  onKeyDown?: (e: React.KeyboardEvent, value: string) => void;
  titles?: Titles;
  option?: StyleOption;
}
export default function TextArea(props: InputProps) {
  const [value, setValue] = props.state;
  const ref = useRef<HTMLTextAreaElement>(null);
  const { width, height, pressure, textColor, font, position } =
    props.option ?? {};
  const container = {
    positions: position ?? "relative",
    displays: "flex items-center",
    widths: width ?? "w-full",
    heights: height ?? "h-32",
    radius: props.option?.radius ?? "rounded-md",
    border: props.option?.border ?? "border-2 border-black",
    textColors: textColor ?? "text-black",
    styles: "overflow-hidden ",
  };
  const body = {
    styles:
      "border-transparent focus:border-transparent focus:ring-0 resize-none focus:outline-none",
    pressures: pressure ?? "pl-2.5",
    sizes: "w-full h-full",
    fonts: font ?? "text-lg",
    background: props.option?.background ?? "bg-white",
  };
  const titleBox = {
    textColors: props.titles?.titleColor ?? "text-black",
    fonts: props.titles?.size ?? "text-lg",
  };
  return (
    <div className="w-full">
      {props.titles && <div className={cn(titleBox)}>{props.titles.title}</div>}
      <div className={cn(container)}>
        <textarea
          value={value}
          placeholder={props.placeholder ?? "입력해주세요."}
          onChange={(e) => setValue(e.target.value)}
          className={cn(body)}
          onKeyDown={(e) => props.onKeyDown && props.onKeyDown(e, value ?? "")}
          ref={ref}
        />
      </div>
    </div>
  );
}
