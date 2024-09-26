import { Text } from "../../../../interface";
import { Shelf } from "../../../../layout";
import { LineBreaks } from "../../../../text";
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
    boundaries: "md:shadow-md pt-2.5 px-3.5 rounded-[12px]",
  };
  return (
    <div className={cn(container)}>
      <div className="text-[#4163f6] text-xl font-bold">{title}</div>
      <div>
        <Shelf.Wrap>
          <div className="box-shadow w-full max-w-160 h-48 p-3.5 rounded-md ">
            <div className="text-[#4163f6] text-xl font-bold">
              GROW PLAN에 오신 것을 환영합니다!
            </div>
            <LineBreaks texts={["AAA BBB CCC 해보세요!"]} />
          </div>
          <div
            onClick={() => alert("진단하러 가기")}
            className="overflow-hidden relative box-shadow w-full max-w-60 h-48 p-3.5 rounded-md "
          >
            <div className="text-[#4163f6] text-xl font-bold">
              진단하러 가기
            </div>
            <img
              src="/images/growplan/ai.png"
              className="absolute bottom-0 right-0 w-2/3"
            />
          </div>
          <div
            onClick={() => alert("전문가 상담")}
            className="relative box-shadow w-full max-w-60 h-48 p-3.5 rounded-md "
          >
            <div className="text-[#4163f6] text-xl font-bold">전문가 상담</div>
            <img
              src="/images/growplan/doctor.png"
              className="absolute bottom-0 right-0 h-full"
            />
          </div>
          <div className="box-shadow  w-full max-w-160 h-32 p-3.5 rounded-md ">
            <div className="text-[#4163f6] text-xl font-bold">AI 예측</div>
            <LineBreaks
              texts={[
                "오늘 아이는 기분이 대체로 밝고 긍정적일 것으로 예측됩니다.",
                "아침부터 활기찬 모습을 보일 가능성이 높으며, 주변 사람들과의 상호작용에서 웃음이 많을 것으로 보입니다.",
              ]}
              className="text-xs"
            />
          </div>
        </Shelf.Wrap>
      </div>
    </div>
  );
}
