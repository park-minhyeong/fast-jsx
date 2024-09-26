import { useNavigate } from "react-router-dom";
import { cn } from "../../../../util";
import { LineBreaks } from "../../../../text";

type Size = "M" | "XL";
interface Item {
  name: string;
  link: string;
  method: string;
  isValid: boolean;
  sizes?: Size[];
}

const items: Item[] = [
  {
    name: "이고진 허리보호대",
    link: "https://search.shopping.naver.com/catalog/42674618552?query=%ED%97%88%EB%A6%AC%EB%B3%B4%ED%98%B8%EB%8C%80&NaPm=ct%3Dm1g64v6o%7Cci%3Dc85c2606b1d9a50979c4bf4a782df85987d3a5fc%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D8ab048e0cfcad5849804a29ec5b35141fef72cc7",
    method: "플라스틱(통판 지지대)",
    isValid: false,
    sizes: ["M", "XL"],
  },
  {
    name: "힐링팩토리 의료용 K-LEGEND 통판 허리보호대 허리디스크 복대벨트        ",
    link: "https://search.shopping.naver.com/catalog/42674618552?query=%ED%97%88%EB%A6%AC%EB%B3%B4%ED%98%B8%EB%8C%80&NaPm=ct%3Dm1g64v6o%7Cci%3Dc85c2606b1d9a50979c4bf4a782df85987d3a5fc%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D8ab048e0cfcad5849804a29ec5b35141fef72cc7",
    method: "플라스틱(통판 지지대)",
    isValid: false,
    sizes: ["M", "XL"],
  },
  {
    name: "힐링팩토리 의료용 K-LEGEND 통판 허리보호대 허리디스크 복대벨트        ",
    link: "https://search.shopping.naver.com/catalog/42674618552?query=%ED%97%88%EB%A6%AC%EB%B3%B4%ED%98%B8%EB%8C%80&NaPm=ct%3Dm1g64v6o%7Cci%3Dc85c2606b1d9a50979c4bf4a782df85987d3a5fc%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D8ab048e0cfcad5849804a29ec5b35141fef72cc7",
    method: "플라스틱(통판 지지대)",
    isValid: false,
    sizes: ["M", "XL"],
  },
  {
    name: "힐링팩토리 의료용 K-LEGEND 통판 허리보호대 허리디스크 복대벨트        ",
    link: "https://search.shopping.naver.com/catalog/42674618552?query=%ED%97%88%EB%A6%AC%EB%B3%B4%ED%98%B8%EB%8C%80&NaPm=ct%3Dm1g64v6o%7Cci%3Dc85c2606b1d9a50979c4bf4a782df85987d3a5fc%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D8ab048e0cfcad5849804a29ec5b35141fef72cc7",
    method: "플라스틱(통판 지지대)",
    isValid: false,
    sizes: ["M", "XL"],
  },
  {
    name: "힐링팩토리 의료용 K-LEGEND 통판 허리보호대 허리디스크 복대벨트        ",
    link: "https://search.shopping.naver.com/catalog/42674618552?query=%ED%97%88%EB%A6%AC%EB%B3%B4%ED%98%B8%EB%8C%80&NaPm=ct%3Dm1g64v6o%7Cci%3Dc85c2606b1d9a50979c4bf4a782df85987d3a5fc%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D8ab048e0cfcad5849804a29ec5b35141fef72cc7",
    method: "플라스틱(통판 지지대)",
    isValid: false,
    sizes: ["M", "XL"],
  },
  {
    name: "힐링팩토리 의료용 K-LEGEND 통판 허리보호대 허리디스크 복대벨트        ",
    link: "https://search.shopping.naver.com/catalog/42674618552?query=%ED%97%88%EB%A6%AC%EB%B3%B4%ED%98%B8%EB%8C%80&NaPm=ct%3Dm1g64v6o%7Cci%3Dc85c2606b1d9a50979c4bf4a782df85987d3a5fc%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D8ab048e0cfcad5849804a29ec5b35141fef72cc7",
    method: "플라스틱(통판 지지대)",
    isValid: false,
    sizes: ["M", "XL"],
  },
];

const result = {
  title: "당신은 척추측만증입니다.",
  description: ["Very Dangerous", "Very Dangerous", "Very Dangerous"],
};

export default function RootPage() {
  const container = {
    sizes: "w-32 h-32",
    boundaries: "border-2 border-gray-medium rounded-lg",
  };
  const router = useNavigate();
  return (
    <div className="flex flex-col gap-y-3.5">
      <div>
        <div className="text-2xl">{result.title}</div>
        <div className="text-sm text-gray-medium">
          <LineBreaks texts={result.description} />
        </div>
      </div>
      <div className="text-2xl text-blue-navy text-bold">
        다음의 보조기로 척추 건강을 보호하세요
      </div>
      <div className="p-4 grid grid-cols-4">
        {items.map((item) => (
          <div onClick={() => window.open(item.link)} className={cn(container)}>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
