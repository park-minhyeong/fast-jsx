import { State, Titles } from "../../interface";
import { useCallback } from "react";
import { cn } from "../../util";

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
type SelectOptionTuple<T> = [T, string];
type SelectOptionObject<T> = {
  value: T,
  title?: string,
  icon?: string
}
export type SelectOption<T> = SelectOptionTuple<T> | SelectOptionObject<T>
export function toSelectOption<T>(
  option: SelectOption<T>
): SelectOptionObject<T> {
  if (Array.isArray(option)) {
    const [value, title] = option;
    return { value, title };
  } else {
    return option;
  }
}
interface SelectProps {
  state: State<string> | State<string | undefined>;
  selectOptions: SelectOption<string | number>[];
  placeholder?: string;
  titles?: Titles;
  option?: Option;
}

export default function Select(props: SelectProps) {
  const { state, selectOptions, placeholder, titles, option } = props;
  const [value, setValue] = state;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setValue(e.target.value);
    },
    [setValue]
  );

  const { width, height, boundary, border, textColor, font, position } = option ?? {};

  const container = {
    positions: position ?? "relative",
    displays: "flex items-center",
    widths: width ?? "w-full",
    heights: height ?? "h-12",
    boundaries: boundary ?? "border-2 rounded-md border-black",
    fonts: font ?? "text-lg",
    textColors: textColor ?? "text-black",
    styles: "overflow-hidden hover:border-gray-600 focus-within:border-blue-500 transition-colors focus:outline-none",
  };

  const selectStyles = {
    styles: "focus:outline-none appearance-none cursor-pointer bg-white",
    sizes: "w-full h-full",
    paddings: "px-2.5",
  };

  const titleBox = {
    textColors: titles?.titleColor ?? "text-black",
    fonts: titles?.size ?? "text-lg",
  };

  const normalizedOptions = selectOptions.map(toSelectOption);

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
