import { cn, toStyleObject } from "../../../../util";
import DashboardHeader from "../organism/Header.organism";
import Menu from "../organism/Menu.organism";
import useHTMLDiv from "../../../../hook/useCheckRef";
import { DashboardProps } from "../interface";

export default function DashboardLayout(props: DashboardProps) {
  const { ref, state } = useHTMLDiv<HTMLDivElement>();
  const container = {
    positions: "relative",
    sizes: "w-full",
  };
  const body = {
    displays: "flex",
    sizes: `w-full`,
    borders: "border-2 border-red-500",
  };
  const scrollWrapper = {
    overflows: "overflow-y-scroll",
    sizes: "w-full h-full",
  };
  return (
    <div className={cn(container)}>
      <DashboardHeader {...props.header} ref={ref} />
      <div
        className={cn(body)}
        style={toStyleObject([
          ["height", `calc(100vh - ${state?.offsetHeight}px)`],
        ])}
      >
        <Menu {...props.menu} />
        <div className={cn(scrollWrapper)}>{props.children}</div>
      </div>
    </div>
  );
}
