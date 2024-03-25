import "../../_sass/card/_styles.scss";
export default function Card({ children }: { children: React.ReactNode }) {
  return <div className="background">{children}</div>;
}
