/**
 * 获取对象中指定类型的key的联合类型
 * @example SelectTypeKey<{ a: 1; b: true; c: 3 }, number>; // 'a' | 'c'
 */
export type SelectTypeKey<T extends object, K> = {
  [P in keyof T]: T[P] extends K ? P : never;
}[keyof T];

/**
 * 返回指定“类型”的key组成的对象
 * @example PickKeyType<{ a: 1; b: true; c: 3 }, number>; // { a: 1; c: 3; }
 */
export type PickKeyType<Obj extends object, Type> = Pick<
  Obj,
  SelectTypeKey<Obj, Type>
>;

/**
 * 剔除指定“类型”的key后组成的对象
 * @example OmitKeyType<{ a: 1; b: true; c: 3 }, number>; // { b: true; }
 */
export type OmitKeyType<Obj extends object, Type> = Omit<
  Obj,
  SelectTypeKey<Obj, Type>
>;

/**
 * 指定K为可选，K可传联合类型表示指定多个key可选
 * @example type R = PickPartial<{a: 1, b: 2, c: 3}, "a" | "b">; //{a?: 1, b?: 2, c: 3}
 */
export type PickPartial<T extends object, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;
