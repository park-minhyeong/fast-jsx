const toStyleString = (defaultStyle: string, customStyle?: string) => {
  return customStyle ?? defaultStyle;
};
function toStyleObject<T extends [string, string][]>(
  tuples: T
): {
  [K in T[number][0]]: Extract<T[number], [K, string]>[1];
} {
  const result: any = {};
  for (const [key, value] of tuples) {
    result[key] = value;
  }
  return result;
}

export { toStyleObject, toStyleString };
