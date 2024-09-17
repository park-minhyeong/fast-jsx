import { cn } from "../../util";
import LoadingSpinner from "./Spinner";
function Loading() {
  const container = {
    displays: "flex justify-center items-center",
    sizes: "w-full h-full",
  };
  const spinner = {
    displays: "flex justify-center items-center",
    animations: "animate-spin duration-4000",
  };

  return (
    <div className={cn(container)}>
      <div className="flex flex-col items-center space-y-4">
        <img
          src="/images/fast-jsx.png"
          alt="fast-jsx"
          className={cn(spinner)}
          width={200}
        />
      </div>
    </div>
  );
}

Loading.Spinner = LoadingSpinner;

export default Loading;
