# ts-tooltype

Common TypeScript generic tool types at work

主要记录工作中常用的 TypeScript 类型体操工具类型

## Number

> 与数字相关的工具类型

### NumberToStr

将数字转为字符串

```ts
type Test = NumberToStr<999>; // "999"
```

### GenerateNumArr

从 0 开始自增 1，得到**指定长度**的数组，由于 TS 递归限制最大只能传 999

```ts
type Test = GenerateNumArr<3>; // [0, 1, 2]
```

### RangeNumber

生成指定整数范围的联合类型

```ts
type Test = RangeNumber<0, 5>; // 0 | 1 | 2 | 3 | 4 | 5
```

## Object

> 与对象相关的工具类型

### SelectTypeKey

获取对象中指定类型的 key 的联合类型

```ts
type Test = SelectTypeKey<{ a: 1; b: true; c: 3 }, number>; // 'a' | 'c'
```

### PickKeyType

返回指定“类型”的 key 组成的对象

```ts
type Test = PickKeyType<{ a: 1; b: true; c: 3 }, number>; // { a: 1; c: 3; }
```

### OmitKeyType

剔除指定“类型”的 key 后组成的对象

```ts
type Test = OmitKeyType<{ a: 1; b: true; c: 3 }, number>; // { b: true; }
```

### PickPartial

指定 K 为可选，K 可传联合类型表示指定多个 key 可选

```ts
type Test = PickPartial<{ a: 1; b: 2; c: 3 }, "a" | "b">; //{a?: 1, b?: 2, c: 3}
```

## String

> 与字符串相关的工具类型

### StringToNumber

将字符串转为数字，只能转换 0 - 999 的整数

```ts
type Test = StringToNumber<"999">; // 999
```
