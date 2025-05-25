import { MouseEvent, useEffect, useRef, useState } from "react";
import { OnClick, SelectOption, State, StyleOption, Titles } from "../../interface";
import { cn } from "../../util";
import SVG from "../../asset/SVG";
import SelectOptionBox from "./Select/organism/SelectOptionBox.organism";

interface InputSelect {
  selectOptions: SelectOption<string>[];
  onClick?: (e: string | number) => void;
}

interface InputProps {
  state: State<string> | State<string | undefined>;
  placeholder?: string;
  onFocus?: OnClick;
  onKeyDown?: (e: React.KeyboardEvent, value: string) => void;
  type?: "text" | "password" | "email" | "number" | "tel" | "url" | "search";
  titles?: Titles;
  select?: InputSelect;
  option?: StyleOption;
}
export default function Input(props: InputProps) {
  const [value, setValue] = props.state;
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isEyeOpen, setIsEyeOpen] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);
  const {
    width,
    height,
    pressure,
    textColor,
    font,
    position,
  } = props.option ?? {};
  const container = {
    positions: position ?? "relative",
    displays: "flex items-center",
    widths: width ?? "w-full",
    heights: height ?? "h-12",
    radius: props.option?.radius ?? "rounded-md",
    border: props.option?.border ?? "border-2 border-black",
    textColors: textColor ?? "text-black",
    styles: "overflow-hidden ",
  };
  const body = {
    styles: "border-transparent focus:border-transparent focus:ring-0 outline-none",
    pressures: props.option?.padding ?? "pl-2.5",
    sizes: "w-full h-full",
    fonts: font ?? "text-lg",
    background: props.option?.background ?? "bg-white",
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
    <div className="w-full relative" onFocus={props.onFocus}>
      {props.titles && <div className={cn(titleBox)}>{props.titles.title}</div>}
      <div className={cn(container)}>
        {props.option?.leftNode}
        <input
          value={value}
          type={props.type ?? "text"}
          placeholder={props.placeholder ?? "입력해주세요."}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocus(true)}
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
        {props.option?.rightNode}
      </div>
      {props.select && (
        <SelectOptionBox
          state={[isFocus, setIsFocus]}
          selectOptions={props.select.selectOptions}
          onClick={props.select.onClick}
          option={props.option}
        />
      )}
    </div>
  );
}
