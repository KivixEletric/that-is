<h1 align="center">That is</h1>

<div align="center">
    <a href='./LICENSE' title='MIT License'><img src='https://img.shields.io/badge/license-MIT-purple.svg?style=for-the-badge'></a>
    <img src='https://img.shields.io/badge/Maintained-yes-green.svg?style=for-the-badge'>
</div>

</br>

> `That-is` is a utility javascript library for type checking, the purpose of the project is to help with flexibility and code optimization

# Installation

You can use the library using a [latest version](https://github.com/KivixEletric/That-is/releases) on github or via [npm](https://www.npmjs.com) (the recommended way):
  
```
npm install @kivixeletric/that-is
```

# How to use

To use the library in your project is very simple, see the example below:

```js          
var is = require('@kivixeletric/that-is')

// Number Type
is.number('0') // will return a False
is.number(0)   // will return a True

// String Type
is.string('boo') // will return a True
is.string(true)  // will return a False
```

But if you want to do multiple checks of the same type, see the example below:

```js
is.number(1, '2')    // False
is.number(1, 2)      // True
is.number(1, '2', 3) // False
is.number(1, 2, 3)   // True
```

But some functions will not have multiple values, for example `is.divisible` and `is.equal`

# Type List

### Logical Types
* `type` or `a` - (type, ...values) -> Checks if value is a selected type

* `defined` or `def` - (...values) -> Checks if value is defined (is also applied to Object types)

* `equal` - (value, other) -> Checks if value is equals a other value

### Numeric Types
* `decimal` - (...values) -> Checks if value is decimal type

* `bigint` - (...values) -> Checks if value is bigint type

* `divisible` - (value, number) -> Checks if value is divisible with another number

* `infinite` - (...values) -> Checks if value is a infinite type

### Object Types
* `element` or `elem` - (...values) -> Checks if value is node element type

* `Object` or `Obj` - (...values) -> Checks if value is array or object type

* `object` or `obj` - (...values) -> Checks if value is object type

* `array` or `arr` - (...values) -> Checks if value is array type

### Natural Types
* `number`, `num` or `int` - (...values) -> Checks if value is number type

* `string` or `str` - (...values) -> Checks if value is string type

* `boolean` or `bool` - (...values) -> Checks if value is boolean type

* `function` or `fn` - (...values) -> Checks if value is function type

* `symbol` - (...values) -> Checks if value is symbol type

### Special Types
* `regexp` - (...values) -> Checks if value is RegExp type

# License

- This project is licensed under [MIT License](./LICENSE)
