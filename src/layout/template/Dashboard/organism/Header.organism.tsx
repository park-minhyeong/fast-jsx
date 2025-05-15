import { forwardRef, Ref } from "react";
import { cn } from "../../../../util";
import { HeaderProps } from "../interface";

export default forwardRef(function DashboardHeader(
  props: HeaderProps,
  ref: Ref<HTMLDivElement>
) {
  const { option } = props ?? {};
  const { padding, background, custom, border, font } = option ?? {};
  const container = {
    displays: "flex items-center justify-center",
    sizes: `w-full ${option?.height ?? "h-20"}`,
    background,
    padding,
    border,
    texts: font ?? "leading-none",
  };
  return (
    <div ref={ref} className={cn(custom ?? container)}>
      {props.title}
    </div>
  );
});
