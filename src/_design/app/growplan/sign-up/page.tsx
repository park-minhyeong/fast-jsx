import { useState } from "react";
import { Shelf } from "../../../../layout";
import Action from "../../../../layout/template/Action";

type Progress = "section1" | "section2" | "section3";
export default function Page() {
  const [progress, setProgress] = useState<Progress>("section1");
  return (
    <Shelf.Center>
      <Shelf.Col
        option={{
          width: "w-1/2",
          height: "h-120",
          boundary: "border-2 border-blue-500",
          pressure: "p-3.5",
        }}
      >
        <Action.Replace
          actions={[
            ["section1", <Section1 />],
            ["section2", <Section2 />],
            ["section3", <Section3 />],
          ]}
        >
          <Section1 />
        </Action.Replace>
      </Shelf.Col>
    </Shelf.Center>
  );
}

function Section1() {
  return <div>1</div>;
}

function Section2() {
  return <div>2</div>;
}
function Section3() {
  return <div>3</div>;
}
