import { LineBreaks } from "../../text/LineBreaks";
import { cn } from "../../util";

export default function RootPage() {
  const container = { displays: "flex ", sizes: "w-full" };
  return (
    <>
      <div className={cn(container)}>
        <div className="flex flex-col items-center w-1/2">
          <img
            src="/images/fast-jsx.png"
            width={200}
            className="animate-spin duration-10000"
          />
          <div className="font-nicomoji text-6xl">FAST JSX</div>
        </div>
        <div className="w-1/2 flex flex-col gap-y-3.5 items-start justify-center">
          <div className="font-nicomoji text-3xl">FAST JSX is...</div>
          <LineBreaks
            texts={[
              "It is a modern library for fast JSX component rendering.",
              "It’s built for React and simplifies complex UI structures.",
              "This library boosts both performance and developer productivity.",
            ]}
            className="text-sm font-mono"
          />
        </div>
      </div>
      <Navigator />
    </>
  );
}

function Navigator() {
  const container = {
    positions: "fixed bottom-5 right-5",
    displays: "flex items-end gap-x-1.5",
  };
  return (
    <div className={cn(container)}>
      <img
        src="/images/icons/github.png"
        width={36}
        onClick={() =>
          window.open("https://github.com/park-minhyeong/fast-jsx")
        }
      />
      <img
        src="/images/icons/linkedin.png"
        width={36}
        onClick={() =>
          window.open("https://www.linkedin.com/in/minhyeong-park-064383250")
        }
      />
    </div>
  );
}
