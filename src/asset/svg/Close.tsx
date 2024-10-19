import { OnClick } from "../../interface";

export default function Close({
  onClick,
  className,
}: {
  onClick: OnClick;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 40 40"
      fill="none"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={className}
      onClick={onClick}
    >
      <circle cx="20" cy="20" r="18" stroke="black" stroke-width="2" />
      <line x1="12" y1="12" x2="28" y2="28" stroke="black" stroke-width="2" />
      <line x1="28" y1="12" x2="12" y2="28" stroke="black" stroke-width="2" />
    </svg>
  );
}
