import { State, Titles } from "../Property";

type SelectOptionTuple<T> = [T, string];
export interface SelectOptionObject<T> {
	value: T;
	title?: string;
	icon?: string;
}
export type SelectOption<T> = SelectOptionObject<T> | SelectOptionTuple<T>;
export function toSelectOptionObject<T>(
	option: SelectOption<T>
): SelectOptionObject<T> {
	if (Array.isArray(option)) {
		const [value, title] = option;
		return { value, title };
	} else {
		return option;
	}
}

export interface SelectToggleProps<T> {
	state: State<T>;
	selectOptions: [SelectOption<T>, SelectOption<T>];
	titles?: Titles;
	option?: {
		className?: string;
	};
}