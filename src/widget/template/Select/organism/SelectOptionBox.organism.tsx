import { MouseEvent } from "react";
import { SelectOption, State, StyleOption, toSelectOptionObject } from "../../../../interface";
import { cn } from "../../../../util";

interface Props {
	onClick?: (value: string | number) => void;
	state: State<boolean>;
	selectOptions: SelectOption<string | number>[];
	option?: StyleOption;
}

export default function SelectOptionBox({ selectOptions, option, state, onClick }: Props) {
	const [isFocus, setIsFocus] = state;
	const options = selectOptions.map(toSelectOptionObject);
	const container = {
		zIndex: 'z-20',
		position: option?.position ?? 'absolute -bottom-0left-0',
		width: option?.width ?? "w-full",
		height: option?.height ?? "h-12",
		background: option?.background ?? "bg-white",
		border: option?.border ?? "border-2 border-black",
		radius: option?.radius,
		font: option?.font ?? "text-lg",
		textColors: option?.textColor ?? "text-black",
	}
	const optionStyle = {
		display: 'flex items-center',
		padding: option?.padding ?? 'pl-2.5',
		background: 'bg-white',
		border: 'border-red-500 border-1',
		width: 'w-full',
		height: option?.height ?? 'h-12',
		cursor: 'cursor-pointer',
	}
	return isFocus && <div
		onClick={(e) => e.stopPropagation()}
		className={cn(container)}>
		{options.map((option) => (
			<div key={option.value} onClick={(e) => {
				setIsFocus(false)
				e.stopPropagation()
				onClick?.(option.value)
			}} className={cn(optionStyle)}>{option.title}</div>
		))}
	</div>;
}