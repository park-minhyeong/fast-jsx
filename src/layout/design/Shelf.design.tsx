import { ShelfProps } from "../../interface/Shelf";
import { LineBreaks } from "../../text";
import { cn } from "../../util";

export default function Shelf<T extends string | number>({
  children,
  className,
  option,
  titles,
}: ShelfProps<T>) {
  const { title, titleColor } = titles ?? {};
  const { titleSize, subtitleSize, isSize } = option ?? {};
  const container = {
    displays: "flex flex-col gap-6",
    sizes: isSize && "w-full h-full lg:h-auto",
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
    className,
  };
  return (
    <div className={cn(container)}>
      {titles && (
        <div className={cn(titleBox.container)}>
          <div className={cn(titleBox.title)}>{title}</div>
          <LineBreaks
            className={cn(titleBox.subtitle)}
            texts={titles?.subtitle}
          />
        </div>
      )}
      <div className={cn(childrenBox)}>{children}</div>
    </div>
  );
}
