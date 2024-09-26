import { useNavigate } from "react-router-dom";
import { cn } from "../../../util";

interface Article {
  title: string;
  description: string[];
}

const articles: Article[] = [
  {
    title: "당신은 척추측만증입니다.",
    description: ["Very Dangerous", "Very Dangerous", "Very Dangerous"],
  },
  {
    title: "당신은 척추측만증입니다.",
    description: ["Very Dangerous", "Very Dangerous", "Very Dangerous"],
  },
  {
    title: "당신은 척추측만증입니다.",
    description: ["Very Dangerous", "Very Dangerous", "Very Dangerous"],
  },
  {
    title: "당신은 척추측만증입니다.",
    description: ["Very Dangerous", "Very Dangerous", "Very Dangerous"],
  },
];
export default function RootPage() {
  const router = useNavigate();
  return (
    <div>
      <Header />
      <div className="text-3xl font-bold ">랜딩페이지</div>
      <div className="text-3xl font-bold mt-16">전문가의 진단</div>
      <div className="flex gap-x-3.5 p-3.5">
        {articles.map((article) => (
          <div className="w-64 h-32 shadow-md">
            <div>{article.title}</div>
          </div>
        ))}
      </div>
      <button
        onClick={() => router("/posturefit/dignosis")}
        className="w-full h-16 text-white bg-crimson-burgundy"
      >
        자가진단하러가기
      </button>
    </div>
  );
}

function Header() {
  const container = {
    displays: "flex justify-between items-center",
    boundaries: "shadow-md pr-7.5",
    sizes: "w-full h-18",
  };
  return (
    <div className={cn(container)}>
      <img
        src="/images/postureit/KakaoTalk_Photo_2024-09-25-23-40-16.jpeg"
        alt="posturefit"
        width={64}
      />
      <div className="font-bold text-2xl">POSTUREIT</div>
    </div>
  );
}
