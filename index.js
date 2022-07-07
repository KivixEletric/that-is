(function (factory) {
  var web = typeof window != 'undefined'
  var node = typeof module != 'undefined' && module.exports
  var data = factory()

  if (web) window.is = data
  if (node) module.exports = data
})

(function(){
  var is = {}

  function BulkCheck(fn) {
    return function (...values) {
      if (values.length == 0) return false;
      return values.every(v => fn(v))
    }
  }

  // Defining Types

  is.type = is.a = function (type, ...values) {
    return is[type] && is[type](...values) || false
  }

  is.divisible = function (value, number) {
    return is.num(value, number) && !is.decimal(value / number)
  }

  is.equal = (value, other) => {
    return value === other
  }

  is.defined = is.def = BulkCheck(value => {
    if (!is.Obj(value)) return typeof value !== 'undefined';
    return !!Object.entries(value)[0]
  })

  is.number = is.num = is.int = BulkCheck(value => {
    return typeof value == 'number'
  })

  is.string = is.str = BulkCheck(value => {
    return typeof value == 'string'
  })

  is.boolean = is.bool = BulkCheck(value => {
    return typeof value == 'boolean'
  })

  is.function = is.fn = BulkCheck(value => {
    return typeof value == 'function'
  })

  is.bigint = BulkCheck(value => {
    return typeof value == 'bigint'
  })

  is.symbol = BulkCheck(value => {
    return typeof value == 'symbol'
  })

  is.object = is.obj = BulkCheck(value => {
    return value && Object.getPrototypeOf(value).isPrototypeOf({})
  })

  is.Object = is.Obj = BulkCheck(value => {
    return typeof value == 'object'
  })

  is.element = is.elem = BulkCheck(value => {
    return value && value.nodeType
  })

  is.decimal = BulkCheck(value => {
    return is.num(value) && value % 1 != 0
  })

  is.array = is.arr = BulkCheck(Array.isArray || (value => {
    return value.toString() === '[object Array]'
  }))

  is.infinite = BulkCheck(value => {
    return value === Infinity || value === -Infinity
  })

  is.regexp = BulkCheck(value => {
    return value.toString().includes('RegExp')
  })

  return is
})
