export type NumberToStr<T> = T extends number ? `${T}` : T;

/**
 * 从0开始自增1，得到指定长度的数组
 * @example GenerateNumArr<5> // [0, 1, 2, 3, 4]
 */
export type GenerateNumArr<
  T,
  Arr extends number[] = []
> = Arr["length"] extends T ? Arr : GenerateNumArr<T, [...Arr, Arr["length"]]>;

/**
 * 生成指定整数范围的联合类型
 * @example RangeNumber<0, 5> // 0 | 1 | 2 | 3 | 4 | 5
 */
export type RangeNumber<
  Start extends number,
  End extends number,
  Arr extends number[] = GenerateNumArr<Start>,
  Result extends number[] = [Start]
> = Arr["length"] extends End
  ? [...Result, End][number]
  : RangeNumber<
      [...Arr, 1]["length"],
      End,
      [...Arr, 1],
      [...Result, Arr["length"]]
    >;
