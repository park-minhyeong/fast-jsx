interface User {
  id: number;
  name: string;
}

export const users: User[] = [
  {
    id: 1,
    name: "김이름",
  },
  {
    id: 2,
    name: "박이름",
  },
];

export const childs: Child[] = [
  {
    id: 1,
    name: "최이름",
    gender: "female",
    birthdate: "2021-01-01",
    bornHeight: 180,
    bornWeight: 80,
    createdAt: new Date(),
  },
];

type DevelopmentType =
  | "localMuscle"
  | "globalMuscle"
  | "selfHelp"
  | "cognitive"
  | "language"
  | "social";

interface DevelopmentCheck {
  id: number;
  type: DevelopmentType;
  script: string;
  status: number;
}

type Gender = "male" | "female";
interface Child {
  id: number;
  name: string;
  birthdate: string;
  gender: Gender;
  bornHeight: number;
  bornWeight: number;
  createdAt: Date;
}
