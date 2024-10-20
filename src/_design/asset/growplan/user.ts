interface User {
  id: number;
  name: string;
}
const users: User[] = [
  {
    id: 1,
    name: "김이름",
  },
  {
    id: 2,
    name: "박이름",
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

interface Child {
  id: number;
  name: string;
  birthdate: string;
  development: Record<DevelopmentType, number>;
}
