
import { cn } from "../../util";
import { SelectToggleProps, toSelectOptionObject } from "../../interface";

export default function SelectToggle({ state, selectOptions, titles }: SelectToggleProps<string>) {
	const options = selectOptions?.map(toSelectOptionObject);
	const [value, setValue] = state;
	const isOff = value === options[0].value;
	const container = {
		positions: "relative",
		displays: "flex items-center",
		sizes: "w-[36px] h-[20px]",
		backgrounds: isOff ? "bg-[#CFD0D2]" : "bg-green-dark",
		boundaries: "rounded-full p-0.5",
	};
	const controller = {
		positions: "absolute",
		locations: isOff ? "left-0.5" : "left-[calc(100%-1rem)]",
		sizes: "w-[14px] h-[14px]",
		backgrounds: "bg-white",
		boundaries: "rounded-full",
		animations: "duration-200",
	};
	const toggle = () => {
		if (value === options[0].value)
			return setValue(options[1].value);
		return setValue(options[0].value);
	};
	return (
		<div className="flex items-center gap-x-1.5 ">
			{titles?.title && (
				<div className="text-sm leading-none">{titles.title}</div>
			)}
			<button onClick={toggle} className={cn(container)}>
				<div className={cn(controller)} />
			</button>
		</div>
	);
}