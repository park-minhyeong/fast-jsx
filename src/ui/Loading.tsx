import { cn } from "../util";

function Loading() {
  const container = {
    displays: "flex justify-center items-center",
    sizes: "w-full h-full",
  };

  return (
    <div className={cn(container)}>
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-28 h-28">
          <div className="absolute w-full h-full border-[12px] border-t-blue-500 border-r-blue-400 border-b-blue-300 border-l-blue-600 rounded-full animate-spin"></div>
        </div>
        <p className="text-blue-500 text-2xl font-semibold animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}

export default Loading;
