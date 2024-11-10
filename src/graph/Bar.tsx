import { DataSet } from "../interface/Data";
import { heightScale } from "../interface/Size";
import { cn } from "../util";

interface Option {
  background?: string;
  display?: string;
  boundary?: string;
  width?: string;
  height?: string;
  pressure?: string;
  barStyle?: string;
}
interface BarProps {
  dataSet: Omit<DataSet<[string, number]>, "renderItem">;
  option?: Option;
}

export default function Bar(props: BarProps) {
  const { width, height, background, pressure, barStyle } = props.option ?? {};
  const container = {
    widths: width ?? "w-full",
    displays: "flex justify-between items-end",
    sizes: height ?? "h-80",
    pressures: pressure,
  };
  const body = {
    displays: "flex flex-col items-center justify-end ",
    sizes: "h-full",
  };
  const bar = {
    displays: "w-8",
    barStyles: barStyle ?? "bg-red-500",
  };
  return (
    <div className={cn(container)}>
      {props.dataSet.items?.map(([key, value]) => (
        <div className={cn(body)}>
          <div className={cn(bar, heightScale[value])} />
          <div className="text-xs sm:text-sm md:text-base">{key}</div>
        </div>
      ))}
    </div>
  );
}
