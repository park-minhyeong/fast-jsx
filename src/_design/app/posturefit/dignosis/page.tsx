import { useNavigate } from "react-router-dom";
import { cn } from "../../../../util";

const checks = [
  "1. 머리가 앞으로 기울어져 있지 않은가요?",
  "2. 어깨가 앞으로 기울어져 있지 않은가요?",
  "3. 등이 둥글지 않은가요?",
  "4. 허리가 앞으로 굽어져 있지 않은가요?",
];

export default function DignosisPage() {
  const container = {
    displays: "flex flex-col gap-y-3.5 justify-center items-center",
    sizes: "w-full min-h-screen",
    boundaries: "px-7.5",
  };
  const router = useNavigate();
  return (
    <div className={cn(container)}>
      <div className="flex gap-x-3.5">
        <div className="border-2 w-120 h-64">GIF</div>
        <div className="border-2 w-64 h-64">asdf</div>
      </div>
      <div className="flex gap-x-3.5">
        <div className="border-2 w-120 h-64">GIF</div>
        <div className="border-2 w-64 h-64">asdf</div>
      </div>
      <div className="w-120 ">
        {checks.map((check) => (
          <div className="flex">
            <input type="checkbox"></input>
            <div>{check}</div>
          </div>
        ))}
      </div>
      <button
        onClick={() => router("/posturefit/result")}
        className="bg-crimson-burgundy w-120 py-3.5 text-white"
      >
        다음
      </button>
    </div>
  );
}
