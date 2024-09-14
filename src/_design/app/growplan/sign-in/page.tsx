import { cn } from "../../../../util";

export default function SignInPage() {
  const container = {
    displays: "flex justify-center items-center",
    sizes: "w-full min-h-screen",
  };

  const body = {
    displays: "flex justify-center",
    sizes: "w-full max-w-[500px] h-[500px]",
    boundaries: "border-2",
  };

  return (
    <div className={cn(container)}>
      <div className={cn(body)}>
        <div>안녕</div>
      </div>
    </div>
  );
}
