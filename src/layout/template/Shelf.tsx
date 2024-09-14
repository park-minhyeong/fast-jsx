import { ShelfProps } from "../../interface/Shelf";
import { cn } from "../../util";
import ShelfDesign from "../design/Shelf.design";

const gap = {
  xy: "gap-7.5",
  x: "gap-x-7.5",
  y: "gap-y-7.5",
  none: "gap-0",
};

function Shelf({ titles, debug, children }: ShelfProps<string | number>) {
  const container = {
    displays: "inline-flex flex-col gap-12",
  };
  return (
    <ShelfDesign
      titles={titles}
      className={cn(container)}
      debug={debug}
      option={{
        titleSize: "text-lg xl:text-2xl",
      }}
    >
      {children}
    </ShelfDesign>
  );
}

function Wrap({
  className,
  titles,
  children,
  debug,
  option,
}: ShelfProps<string | number>) {
  const container = {
    displays: "flex flex-col lg:flex-row flex-wrap",
    gaps: gap[option?.gap ?? "xy"],
    className,
  };
  return (
    <ShelfDesign
      titles={titles}
      className={cn(container)}
      option={{
        titleSize: "text-lg xl:text-2xl",
        subtitleSize: "text-sm",
      }}
      debug={debug}
    >
      {children}
    </ShelfDesign>
  );
}
function Row({
  titles,
  children,
  className,
  debug,
}: ShelfProps<string | number>) {
  const container = {
    displays: "flex flex-col lg:flex-row",
    className: className ?? "gap-x-7.5",
  };
  return (
    <ShelfDesign
      titles={titles}
      className={cn(container)}
      option={{
        titleSize: "text-lg xl:text-2xl",
        subtitleSize: "text-sm",
        isSize: true,
      }}
      debug={debug}
    >
      {children}
    </ShelfDesign>
  );
}

function Col({
  titles,
  children,
  debug,
  className,
}: ShelfProps<string | number>) {
  const container = {
    displays: "flex flex-col lg:flex-wrap",
    className: className ?? "gap-y-7.5",
  };
  return (
    <ShelfDesign
      titles={titles}
      className={cn(container)}
      option={{
        titleSize: "text-lg xl:text-2xl",
        subtitleSize: "text-sm",
      }}
      debug={debug}
    >
      {children}
    </ShelfDesign>
  );
}

Shelf.Wrap = Wrap;
Shelf.Row = Row;
Shelf.Col = Col;

export default Shelf;
