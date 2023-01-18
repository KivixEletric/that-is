(function (factory) {
  var node = typeof module != 'undefined' && module.exports
  var web = typeof window != 'undefined'
  var data = factory()

  if (node) module.exports = data
  if (web) window.is = data
})

(function(){
  var is = {}

  function every(fn) {
    return function (...values) {
      if (values.length == 0) return false;
      return values.every(v => fn(v))
    }
  }

  // Defining Types

  is.type = is.a = function (type, ...values) {
    return is[type] ? is[type](...values) : false
  }

  is.divisible = function (value, number) {
    return is.num(value, number) && (value % number) == 0
  }

  is.equal = (value, other) => {
    return value === other
  }

  is.defined = is.def = every(value => {
    return is.Obj(value) && !!Object.entries(value)[0] || typeof value !== 'undefined'
  })

  is.number = is.num = is.int = every(value => {
    return typeof value == 'number'
  })

  is.function = is.fn = every(value => {
    return typeof value == 'function'
  })

  is.string = is.str = every(value => {
    return typeof value == 'string'
  })

  is.boolean = is.bool = every(value => {
    return typeof value == 'boolean'
  })

  is.bigint = every(value => {
    return typeof value == 'bigint'
  })

  is.symbol = every(value => {
    return typeof value == 'symbol'
  })

  is.Object = is.Obj = every(value => {
    return typeof value == 'object'
  })

  is.object = is.obj = every(value => {
    return value.toString().includes('Object')
  })

  is.array = is.arr = every(Array.isArray || (value => {
    return value.toString().includes('Array')
  }))

  is.regexp = every(value => {
    return value.toString().includes('RegExp')
  })

  is.element = is.elem = every(value => {
    return !!value?.nodeType
  })

  is.decimal = every(value => {
    return is.num(value) && (value % 1) != 0
  })

  is.infinite = every(value => {
    return value === Infinity || value === -Infinity
  })

  return is
})