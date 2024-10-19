import { ShelfDesignProps } from "../../interface/Shelf";
import { LineBreaks } from "../../text";
import { cn } from "../../util";
import Action from "../template/Action";

export default function Shelf(props: ShelfDesignProps) {
  const { title, subtitle, titleColor } = props.titles ?? {};
  const {
    width,
    height,
    titleSize,
    subtitleSize,
    background,
    boundary,
    pressure,
  } = props.option ?? {};
  const container = {
    displays: "flex flex-col gap-6",
    widths: width ?? "w-full",
    heights: height ?? " h-auto",
    backgrounds: background,
    boundaries: boundary,
    pressures: pressure,
  };
  const titleBox = {
    container: "flex flex-col h-6 leading-none",
    title: {
      text: titleSize ?? "text-xl xl:text-xl",
      font: "font-pretendard-bold",
      titleColor: titleColor ?? "text-gray-dim",
    },
    subtitle: {
      text: subtitleSize ?? "text-base xl:text-lg",
    },
  };
  const childrenBox = {
    sizes: "w-full h-full",
    classNames: props?.className,
  };
  return (
    <div className={cn(container)}>
      <Action.Show actions={props.action?.shows}>
        {props.titles && (
          <div className={cn(titleBox.container)}>
            <div className={cn(titleBox.title)}>{title}</div>
            <LineBreaks className={cn(titleBox.subtitle)} texts={subtitle} />
          </div>
        )}
        <div className={cn(childrenBox)}>{props.children}</div>
      </Action.Show>
    </div>
  );
}
