declare type TypeList = "type" | "a" | "defined" | "def" | "number" | "num" | "int" | "function" | "fn" | "string" | "str" | "boolean" | "bool" | "object" | "obj" | "array" | "arr" | "element" | "elem" | "node" | "infinite" | "decimal" | "bigInt" | "symbol" | "regexp" | "divisible" | "typeEquals" | "equals"

declare module '@kivixeletric/that-is' {
  interface Types {
    type(type: TypeList, ...value: unknown[]): boolean
    a(type: TypeList, ...value: unknown[]): boolean

    divisible(value1: number, value2: number): boolean
    typeEquals(value1: unknown, value2: unknown): boolean
    equal(value1: unknown, value2: unknown): boolean

    defined(...value: unknown[]): boolean
    def(...value: unknown[]): boolean

    decimal(...values: unknown[]): boolean
    bigint(...values: unknown[]): boolean
    infinite(...values: unknown[]): boolean

    element(...values: unknown[]): boolean
    elem(...values: unknown[]): boolean
    node(...values: unknown[]): boolean

    object(...values: unknown[]): boolean
    obj(...values: unknown[]): boolean

    array(...values: unknown[]): boolean
    arr(...values: unknown[]): boolean

    number(...values: unknown[]): boolean
    num(...values: unknown[]): boolean
    int(...values: unknown[]): boolean

    string(...values: unknown[]): boolean
    str(...values: unknown[]): boolean

    boolean(...values: unknown[]): boolean
    bool(...values: unknown[]): boolean

    function(...values: unknown[]): boolean
    fn(...values: unknown[]): boolean

    symbol(...values: unknown[]): boolean
    regexp(...values: unknown[]): boolean
  }
  
  var That_is: Types
  export = That_is
}