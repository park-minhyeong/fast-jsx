export default function LineBreaks({
  texts,
  className,
}: {
  texts?: string[] | string;
  className?: string;
}) {
  const strings =
    typeof texts === "string"
      ? texts.split("\n")
      : texts?.map((text) => text.split("\n")).flat();
  return (
    <div className={className}>
      {strings?.map((text, index) => (
        <div key={index} className="leading-tight">
          {text.length > 0 ? text : "\u00a0"}
        </div>
      ))}
    </div>
  );
}
