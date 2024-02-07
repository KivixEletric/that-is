;(function (factory) {
  var isNodeEnv = typeof module != 'undefined' && module.exports
  var isWebEnv = typeof window != 'undefined' && (window.is = {})
  var exports = isNodeEnv || isWebEnv || {}

  var devToolPrototypeValues = {
    setAlias(alias, value) {
      alias.forEach(name => (exports[name] = value))
    }
  }

  Object.defineProperty(exports, '__esModule', { value: true })
  Object.setPrototypeOf(exports, devToolPrototypeValues)
  Object.setPrototypeOf(exports, factory(exports) || {})
})

(exports => {
  function forEachValues(fn) {
    return function (...values) {
      if (values.length <= 0) return false
      return values.every(v => fn(v))
    }
  }

  exports.setAlias(['type', 'a'], (type, ...values) => {
    return exports[type] ? exports[type](...values) : false
  })

  exports.setAlias(['defined', 'def'], forEachValues(value => {
    return (exports.object(value) && !!Object.entries(value)[0]) || typeof value !== 'undefined'
  }))

  exports.setAlias(['number', 'num', 'int'], forEachValues(value => {
    return typeof value === 'number'
  }))

  exports.setAlias(['function', 'fn'], forEachValues(value => {
    return typeof value === 'function'
  }))

  exports.setAlias(['string', 'str'], forEachValues(value => {
    return typeof value === 'string'
  }))

  exports.setAlias(['boolean', 'bool'], forEachValues(value => {
    return typeof value === 'boolean'
  }))

  exports.setAlias(['object', 'obj'], forEachValues(value => {
    return value.toString().includes('Object')
  }))

  exports.setAlias(['array', 'arr'], forEachValues(value => {
    return Array?.isArray ? Array.isArray(value) : value.toString().includes('Array')
  }))

  exports.setAlias(['element', 'elem', 'node'], forEachValues(value => {
    return !!value?.nodeType
  }))

  exports.infinite = forEachValues(value => {
    return value === Infinity || value === -Infinity
  })

  exports.decimal = forEachValues(value => {
    return exports.number(value) && value % 1 !== 0
  })

  exports.bigInt = forEachValues(value => {
    return typeof value === 'bigint'
  })

  exports.symbol = forEachValues(value => {
    return typeof value === 'symbol'
  })

  exports.regexp = forEachValues(value => {
    return value.toString().includes('RegExp')
  })
  
  exports.divisible = function (number1, number2) {
    return exports.number(number1, number2) && number1 % number2 == 0
  }

  exports.typeEquals = function (value1, value2) {
    return typeof value1 === typeof value2
  }

  exports.equals = function (value1, value2) {
    return value1 === value2
  }
})