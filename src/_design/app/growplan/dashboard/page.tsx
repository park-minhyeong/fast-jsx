import { Text } from "../../../../interface";
import { LineBreaks } from "../../../../text/LineBreaks";
import { cn } from "../../../../util";

export default function DashboardPage() {
  return (
    <Board
      text={{
        title: "홈",
      }}
    />
  );
}

function Board({ text }: { text: Text }) {
  const { title, subtitle } = text;
  const container = {
    displays: "flex flex-col gap-y-3.5",
    sizes: "w-full h-full",
    boundaries: "shadow-md pt-2.5 px-3.5 rounded-[12px]",
  };
  return (
    <div className={cn(container)}>
      <div className="text-[#4163f6] text-xl font-bold">{title}</div>
      <div>
        <div className="border-2  w-full max-w-160 h-32 p-3.5 rounded-md border-[#4163f6]">
          <div className="text-[#4163f6] text-xl font-bold">
            GROW PLAN에 오신 것을 환영합니다!
          </div>
          <LineBreaks texts={["AAA BBB CCC 해보세요!"]} />
        </div>
      </div>
    </div>
  );
}
