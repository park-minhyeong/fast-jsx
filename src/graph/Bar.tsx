import { DataSet } from "../interface/Data";
import { heightScale } from "../interface/Size";
import { cn } from "../util";

interface BarProps {
  dataSet: Omit<DataSet<[string, number]>, "renderItem">;
}

export default function Bar(props: BarProps) {
  const container = {
    displays: "flex justify-between items-end",
    sizes: "h-80",
  };
  const body = {
    displays: "flex flex-col items-center justify-end ",
    sizes: "h-full",
  };
  const bar = {
    displays: "w-8",
    backgrounds: "bg-red-500",
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
