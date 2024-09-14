import { cn } from "../../../util";

export default function GrowPlanPage() {
  const container = {
    displays: "flex justify-center lg:justify-between items-center",
    sizes: "w-full",
    boundareis: "pt-32 lg:pl-16 lg:pr-12",
  };
  return (
    <div className={cn(container)}>
      <div className="flex flex-col items-center image-container">
        <img src="/images/growplan/logo.png" width={200} />
        <div>발달지연 아동을 위한 스마트 트래킹 서비스</div>
      </div>
      <img
        className="hidden lg:block"
        src="/images/growplan/sample.png"
        width={600}
      />
    </div>
  );
}