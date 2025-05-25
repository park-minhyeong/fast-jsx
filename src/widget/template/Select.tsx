import { State, StyleOption, Titles, toSelectOptionObject } from "../../interface";
import { useCallback } from "react";
import { cn } from "../../util";
import SelectToggle from "./Select.Toggle";

type SelectOptionTuple<T> = [T, string];
type SelectOptionObject<T> = {
  value: T,
  title?: string,
  icon?: string
}
export type SelectOption<T> = SelectOptionTuple<T> | SelectOptionObject<T>

export interface SelectProps {
  state: State<string> | State<string | undefined>;
  selectOptions: SelectOption<string | number>[];
  placeholder?: string;
  titles?: Titles;
  option?: StyleOption;
}
function Select(props: SelectProps) {
  const { state, selectOptions, placeholder, titles, option } = props;
  const [value, setValue] = state;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setValue(e.target.value);
    },
    [setValue]
  );

  const { width, height, border, textColor, font, position } = option ?? {};

  const container = {
    positions: position ?? "relative",
    displays: "flex items-center",
    widths: width ?? "w-full",
    heights: height ?? "h-12",
    boundaries: props.option?.border ?? "border-2 border-black",
    radius: props.option?.radius ?? "rounded-md",
    fonts: font ?? "text-lg",
    textColors: textColor ?? "text-black",
    styles: "overflow-hidden hover:border-gray-600 focus-within:border-blue-500 transition-colors focus:outline-none",
  };

  const selectStyles = {
    styles: "border-transparent focus:border-transparent focus:ring-0 outline-none focus:outline-none appearance-none cursor-pointer bg-white",
    sizes: "w-full h-full",
    paddings: "px-2.5",
  };

  const titleBox = {
    textColors: titles?.titleColor ?? "text-black",
    fonts: titles?.size ?? "text-lg",
  };

  const normalizedOptions = selectOptions.map(toSelectOptionObject);

  return (
    <div className="w-full">
      {titles?.title && <div className={cn(titleBox)}>{titles.title}</div>}
      <div className={cn(container)}>
        <select
          className={cn(selectStyles)}
          value={value ?? ""}
          onChange={handleChange}
          aria-label={titles?.title || "Select option"}
        >
          {placeholder && (
            <option value="" disabled className="text-gray-400">
              {placeholder}
            </option>
          )}
          {normalizedOptions.map((opt) => (
            <option key={opt.value} value={opt.value} className="text-black">
              {opt.icon && `${opt.icon} `}{opt.title || opt.value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
Select.Toggle = SelectToggle

export default Select