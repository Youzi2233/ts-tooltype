type TransformFnUnion<T> = T extends T ? () => T : never;

/**
 * 联合类型转为交叉类型，利用的是extends分发的特性结合在函数参数发生的逆变且被提取为同一类型参数名后，则该类型参数会变为交叉类型的特性
 * @example UnionToIntersection<{a: 1} | {b: 2}> // {a: 1} & {b: 2}
 */
export type UnionToIntersection<U> = (
  U extends U ? (x: U) => any : never
) extends (x: infer R) => any
  ? R
  : never;

/**
 * @d 获取联合类型最后一个类型，但并不是按传入的顺序，TS联合类型会有自己的排序去存储
 * @d 比如GetLastUnion<1 | 2 | 0>， 结果为2
 */
export type GetLastUnion<U> = UnionToIntersection<
  TransformFnUnion<U>
> extends () => infer R
  ? R
  : never;

/**
 * 联合类型转为元组类型
 * @example UnionToTuple<"2" | "1" | "3">; // ["2", "1", "3"]
 */
export type UnionToTuple<T> = [GetLastUnion<T>] extends [never]
  ? []
  : [...UnionToTuple<Exclude<T, GetLastUnion<T>>>, GetLastUnion<T>];

/**
 * 判断一个类型是不是联合类型，利用元组包裹联合类型阻止被分发去判断
 * @example IsUnion<1 | 2 | 3> // true
 */
export type IsUnion<A, B = A> = A extends A
  ? [B] extends [A]
    ? false
    : true
  : never;
