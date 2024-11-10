import { ShelfDesignProps } from "../../interface/Shelf";
import { cn } from "../../util";
import ShelfDesign from "../design/Shelf.design";

const gap = {
  xy: "gap-7.5",
  x: "gap-x-7.5",
  y: "gap-y-7.5",
  none: "gap-0",
};

interface ShelfProps extends Omit<ShelfDesignProps, "className"> {}

function Shelf({ titles, action, debug, children, option }: ShelfProps) {
  const container = {
    displays: "inline-flex flex-col gap-12",
    styles: "overflow-hidden",
  };
  return (
    <ShelfDesign
      titles={titles}
      action={action}
      className={cn(container)}
      debug={debug}
      option={{
        titleSize: "text-lg xl:text-2xl",
        ...option,
      }}
    >
      {children}
    </ShelfDesign>
  );
}

function Center({ titles, action, children, option }: ShelfProps) {
  const container = {
    displays: "inline-flex flex-col gap-12 flex justify-center items-center",
  };
  return (
    <ShelfDesign
      titles={titles}
      action={action}
      className={cn(container)}
      option={{
        titleSize: "text-lg xl:text-2xl",
        height: "h-screen min-h-screen",
        ...option,
      }}
    >
      {children}
    </ShelfDesign>
  );
}
function Wrap({ titles, action, children, option }: ShelfProps) {
  const container = {
    displays: "flex flex-col lg:flex-row flex-wrap",
  };
  return (
    <ShelfDesign
      titles={titles}
      action={action}
      className={cn(container)}
      option={{
        titleSize: "text-lg xl:text-2xl",
        subtitleSize: "text-sm",
        ...option,
      }}
    >
      {children}
    </ShelfDesign>
  );
}
function Row({ titles, action, children, option }: ShelfProps) {
  const container = {
    displays: "flex flex-col lg:flex-row",
    className: "gap-x-7.5",
  };
  return (
    <ShelfDesign
      titles={titles}
      action={action}
      className={cn(container)}
      option={{
        titleSize: "text-lg xl:text-2xl",
        subtitleSize: "text-sm",
        isSize: true,
        ...option,
      }}
    >
      {children}
    </ShelfDesign>
  );
}

function Col({ titles, action, children, debug, option }: ShelfProps) {
  const container = {
    displays: "flex flex-col lg:flex-wrap",
    className: option?.display ?? "gap-y-7.5",
  };
  return (
    <ShelfDesign
      className={cn(container)}
      action={action}
      titles={titles}
      option={{
        titleSize: "text-lg xl:text-2xl",
        subtitleSize: "text-sm",
        ...option,
      }}
      debug={debug}
    >
      {children}
    </ShelfDesign>
  );
}

Shelf.Center = Center;
Shelf.Wrap = Wrap;
Shelf.Row = Row;
Shelf.Col = Col;

export default Shelf;
