import { cn } from "../util";

function Loading() {
  const container = {
    displays: "flex justify-center items-center",
    sizes: "w-full h-full",
  };
  const spinner = {
    displays: "flex justify-center items-center",
    sjzes: "w-full h-full ",
    boundaries: "border-[12px] rounded-full  p-4",
    styles:
      "border-t-black border-r-gray-500 border-b-gray-300 border-l-gray-100 ",
    animations: "duration-4000 animate-spin",
  };

  return (
    <div className={cn(container)}>
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-40 h-40">
          <div className={cn(spinner)}>
            <img src="/images/fast-jsx.png" alt="fast-jsx" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
