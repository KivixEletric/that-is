declare type types = 
'defined'  | 'def'      | 'decimal'  |
'bigint'   | 'infinite' | 'element'  |
'elem'     | 'Object'   | 'Obj'      |
'object'   | 'obj'      | 'array'    |
'arr'      | 'number'   | 'num'      |
'int'      | 'string'   | 'str'      |
'boolean'  | 'bool'     | 'function' |
'fn'       | 'symbol'   | 'regexp'

declare module '@kivixeletric/that-is' {
  interface Types {
    type(type: types, ...value: unknown[]): boolean
    a(type: types, ...value: unknown[]): boolean

    divisible(value: number, number: number): boolean
    equal(value: unknown, other: unknown): boolean

    defined(...value: unknown[]): boolean
    def(...value: unknown[]): boolean

    decimal(...values: unknown[]): boolean
    bigint(...values: unknown[]): boolean
    infinite(...values: unknown[]): boolean

    element(...values: unknown[]): boolean
    elem(...values: unknown[]): boolean

    Object(...values: unknown[]): boolean
    Obj(...values: unknown[]): boolean

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