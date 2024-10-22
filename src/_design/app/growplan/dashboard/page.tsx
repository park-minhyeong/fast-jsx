import Graph from "../../../../graph";
import { Shelf } from "../../../../layout";
import { cn } from "../../../../util";
import { Button, Label } from "../../../../widget";
import { surveys } from "../../../asset/growplan/development";
import { childs } from "../../../asset/growplan/user";
export default function DashboardPage() {
  return (
    <Shelf.Col
      option={{
        background: "bg-white",
        display: "gap-y-1.5",
        boundary: "p-3.5 rounded-md",
      }}
    >
      <Introduction />
      <Graph.Bar
        dataSet={{
          items: [
            ["대근육", 0.8],
            ["소근육", 0.6],
            ["인지", 0.1],
            ["언어", 0.4],
            ["사회", 0.2],
            ["자조", 0.3],
          ],
        }}
      />
      <CheckList />
    </Shelf.Col>
  );
}

function Introduction() {
  const child = childs[0];
  const titleBox = {
    displays: "flex gap-x-1.5 items-end",
  };
  return (
    <div>
      <Label
        title="N개월차"
        option={{
          width: "w-16",
          background: "bg-gray-500",
        }}
      />
      <div className={cn(titleBox)}>
        <div className="text-2xl">{child.name}</div>
        <div>님의</div>
      </div>
      <div>발달 척도에요</div>
    </div>
  );
}

function CheckList() {
  const body = {
    displays: "flex flex-col gap-y-1.5",
  };
  const box = {
    displays: "flex ",
    backgrounds: "bg-gray-400",
    fonts: "text-white",
  };
  return (
    <Shelf.Col
      option={{
        background: "bg-gray-300",
        pressure: "p-3.5",
      }}
    >
      <div className="text-xl font-bold">현재 N개월 차가 된 아이는</div>
      <div className={cn(body)}>
        {surveys.map((survey) => (
          <div className={cn(box)}>{survey.script}</div>
        ))}
      </div>
      <Button title="아이의 발달의 상태 기록하기" onClick={() => {}} />
    </Shelf.Col>
  );
}
