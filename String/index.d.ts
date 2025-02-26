import { RangeNumber } from "../Number";

type StringToNumberEnum = {
  [P in RangeNumber<0, 999> as `${P}`]: P;
};

/**
 * 只能转换0 - 999的整数
 */
export type StringToNumber<Str extends keyof StringToNumberEnum> =
  StringToNumberEnum[Str];
