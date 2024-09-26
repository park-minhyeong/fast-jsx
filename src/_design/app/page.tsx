import { LineBreaks } from "../..";
import { cn } from "../../util";
import Contact from "../components/Contact";
import Navigator from "../components/Navigator";

export default function RootPage() {
  const container = {
    displays: "flex flex-col justify-center items-center",
    sizes: "w-full min-h-screen",
  };
  const body = {
    displays: "flex flex-col gap-y-3.5 lg:flex-row items-center",
    sizes: "w-full",
  };
  return (
    <div className={cn(container)}>
      <div className={cn(body)}>
        <div className="flex flex-col gap-y-3.5 items-center w-full lg:w-1/2">
          <img
            src="/images/fast-jsx.png"
            width={200}
            className="animate-spin duration-10000"
          />
          <div className="font-nicomoji text-4xl sm:text-6xl">FAST JSX</div>
        </div>
        <div className="items-center w-full lg:w-1/2 flex flex-col gap-y-3.5 lg:items-start justify-center">
          <div className="font-nicomoji text-3xl hidden lg:block">
            FAST JSX is...
          </div>
          <LineBreaks
            texts={[
              "It is a modern library for fast JSX component rendering.",
              "It’s built for React and simplifies complex UI structures.",
              "This library boosts both performance and developer productivity.",
            ]}
            className="text-xs sm:text-sm font-mono text-center lg:text-left"
          />
        </div>
      </div>
      {/* <Navigator /> */}
      <Contact />
    </div>
  );
}
