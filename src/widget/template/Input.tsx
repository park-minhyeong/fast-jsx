import { useEffect, useRef, useState } from "react";
import { OnClick, State, Titles } from "../../interface";
import { cn } from "../../util";
import SVG from "../../asset/SVG";

interface Option {
  width?: string;
  height?: string;
  boundary?: string;
  border?: string;
  font?: string;
  textColor?: string;
  pressure?: string;
  position?: string;
}

interface InputProps {
  state: State<string | undefined>;
  onKeyDown?: (e: React.KeyboardEvent, value: string) => void;
  type?: "text" | "password" | "email" | "number" | "tel" | "url" | "search";
  titles?: Titles;
  option?: Option;
}

export default function Input(props: InputProps) {
  const [value, setValue] = props.state;
  const [isEyeOpen, setIsEyeOpen] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);
  const { width, height, boundary, pressure, textColor, font, position } =
    props.option ?? {};
  const container = {
    positions: position ?? "relative",
    displays: "flex items-center",
    widths: width ?? "w-full",
    heights: height ?? "h-12",
    boundaries: boundary ?? "border-2 rounded-md border-black",
    fonts: font ?? "text-lg",
    textColors: textColor ?? "text-black",
    styles: "overflow-hidden ",
  };
  const body = {
    styles: "focus:outline-none ",
    pressures: pressure ?? "pl-2.5",
    sizes: "w-full h-full",
  };
  const titleBox = {
    textColors: props.titles?.titleColor ?? "text-black",
    fonts: props.titles?.size ?? "text-lg",
  };
  useEffect(() => {
    if (props.type === "password") {
      ref.current?.setAttribute("type", isEyeOpen ? "text" : "password");
    }
  }, [isEyeOpen]);

  return (
    <div className="w-full">
      {props.titles && <div className={cn(titleBox)}>{props.titles.title}</div>}
      <div className={cn(container)}>
        <input
          value={value}
          type={props.type ?? "text"}
          onChange={(e) => setValue(e.target.value)}
          className={cn(body)}
          onKeyDown={(e) => props.onKeyDown && props.onKeyDown(e, value ?? "")}
          ref={ref}
        />
        {props.type === "password" &&
          (isEyeOpen ? (
            <SVG.Eye.Open
              onClick={() => setIsEyeOpen(false)}
              className="absolute right-3.75"
            />
          ) : (
            <SVG.Eye.Close
              onClick={() => setIsEyeOpen(true)}
              className="absolute right-3.75"
            />
          ))}
      </div>
    </div>
  );
}
