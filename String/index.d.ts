import { RangeNumber } from "../Number";

type StringToNumberEnum = {
  [P in RangeNumber<0, 999> as `${P}`]: P;
};

/**
 * 将字符串转为数字，只能转换0 - 999的整数
 * @example StringToNumber<'0'> // 0
 */
export type StringToNumber<Str extends keyof StringToNumberEnum> =
  StringToNumberEnum[Str];
