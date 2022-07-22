declare type TypesList = 
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
    type(type: TypesList, ...value: any): boolean
    a(type: TypesList, ...value: any): boolean

    equal(value: any, other: any): boolean
    divisible(value: number, number: number): boolean

    defined(...value: any): boolean
    def(...value: any): boolean

    decimal(...values: number[]): boolean
    bigint(...values: number[]): boolean
    infinite(...values: number[]): boolean

    element(...values: HTMLElement[]): boolean
    elem(...values: HTMLElement[]): boolean

    Object(...values: Object[]): boolean
    Obj(...values: Object[]): boolean

    object(...values: object[]): boolean
    obj(...values: object[]): boolean

    array(...values: Array<any>): boolean
    arr(...values: Array<any>): boolean

    number(...values: number[]): boolean
    num(...values: number[]): boolean
    int(...values: number[]): boolean

    string(...values: string[]): boolean
    str(...values: string[]): boolean

    boolean(...values: boolean[]): boolean
    bool(...values: boolean[]): boolean

    function(...values: Function[]): boolean
    fn(...values: Function[]): boolean

    symbol(...values: symbol[]): boolean
    regexp(...values: RegExp[]): boolean
  }

  var That_is: Types
  export = That_is
}