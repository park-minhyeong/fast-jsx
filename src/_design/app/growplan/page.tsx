import { useNavigate } from "react-router-dom";
import { cn } from "../../../util";
import { Button } from "../../../widget";

export default function GrowPlanPage() {
  const router = useNavigate();
  const container = {
    displays: "flex flex-col items-center gap-y-3.5",
  };
  const body = {
    displays:
      "flex flex-col gap-y-32 lg:flex-row justify-center lg:justify-between items-center",
    sizes: "w-full",
    boundareis: "pt-32 lg:pl-16 lg:pr-12",
  };
  return (
    <div className={cn(container)}>
      <div className={cn(body)}>
        <div className="flex flex-col items-center image-container">
          <img src="/images/growplan/logo.png" width={200} />
          <div>발달지연 아동을 위한 스마트 트래킹 서비스</div>
        </div>
        <img
          src="/images/growplan/sample.png"
          width={600}
          className="hidden lg:block"
        />
      </div>
      <Button
        title="로그인"
        onClick={() => router("/growplan/sign-in")}
        option={{
          width: "w-full max-w-64",
          height: "h-12",
          background: "bg-[#4163f6]",
          font: "text-lg",
        }}
      />
    </div>
  );
}
