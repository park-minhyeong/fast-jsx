import { cn } from "../../util";

export default function Contact() {
  const container = {
    positions: "fixed bottom-5 right-5",
    displays: "flex items-end gap-x-1.5",
  };
  return (
    <div className={cn(container)}>
      <img
        src="/images/icons/github.png"
        width={36}
        onClick={() =>
          window.open("https://github.com/park-minhyeong/fast-jsx")
        }
        className=" cursor-pointer"
      />
      <img
        src="/images/icons/npm.png"
        width={36}
        onClick={() => window.open("https://www.npmjs.com/package/fast-jsx")}
        className="border-2 border-black rounded-[6px] cursor-pointer"
      />
      <img
        src="/images/icons/linkedin.png"
        width={36}
        onClick={() =>
          window.open("https://www.linkedin.com/in/minhyeong-park-064383250")
        }
        className=" cursor-pointer"
      />
    </div>
  );
}
