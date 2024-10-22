type DevelopmentType = "LM" | "GM" | "SH" | "CG" | "LG" | "SC";
interface Survey {
  id: number;
  type: DevelopmentType;
  script: string;
  status: number;
}

export const surveys: Survey[] = [
  {
    id: 1,
    type: "LM",
    script: "일어설 수 있어야해요.",
    status: 0,
  },
  {
    id: 2,
    type: "GM",
    script: "대근육 발달할 수 있어야해요.",
    status: 1,
  },
  {
    id: 3,
    type: "SH",
    script: "자가도움 발달 할 수 있어야해요.",
    status: 2,
  },
  {
    id: 4,
    type: "CG",
    script: "인지 발달 할 수 있어야해요.",
    status: 3,
  },
  {
    id: 5,
    type: "LG",
    script: "언어 발달 할 수 있어야해요.",
    status: 4,
  },
  {
    id: 6,
    type: "SC",
    script: "사회성 발달 할 수 있어야해요.",
    status: 5,
  },
];
