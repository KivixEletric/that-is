(function (factory) {
  var web = (typeof window != 'undefined')
  var node = (typeof module != 'undefined' && module.exports)
  var data = factory()

  if (web) window.is = data
  if (node) module.exports = data
})

(function () {
  var is = {}
  
  function BulkCheck(fn) {
    return function (...values) {
      if (values.length == 0) return false
      return values.every(v => fn(v))
    }
  }

  /**
   ** **is.type | is.a** - Verify if `value` is a type of `type`
   * @param {string} type
   */
  is.type = is.a = function (type, ...values) {
    return is[type] && is[type](...values) || false
  }

  /**
   * * **is.divisible** - Verify if `value` is divisible with `number` 
   * @param {number} value 
   * @param {number} number 
   */
  is.divisible = function (value, number) {
    return is.num(value, number) && !is.decimal(value / number)
  }

  /**
   * * **is.equal** - Verify if `value` is equals to `other` 
   */
  is.equal = (value, other) => value === other

  /**
   * * **is.number | is.num | is.int** - Verify if `value` is a number
   */
  is.number = is.num = is.int = BulkCheck(value => typeof value == 'number')

  /**
   * * **is.string | is.str** - Verify if `value` is a string
   */
  is.string = is.str = BulkCheck(value => typeof value == 'string')

  /**
   * * **is.boolean | is.bool** - Verify if `value` is a boolean
   */
  is.boolean = is.bool = BulkCheck(value => typeof value == 'boolean')

  /**
   * * **is.function | is.fn** - Verify if `value` is a function
   */
  is.function = is.fn = BulkCheck(value => typeof value == 'function')

  /**
   * * **is.bigint** - Verify if `value` is a bigint type
   */
  is.bigint = BulkCheck(value => typeof value == 'bigint')

  /**
   * * **is.symbol** - Verify if `value` is a symbol type
   */
  is.symbol = BulkCheck(value => typeof value == 'symbol')

  /**
   * * **is.object | is.obj** - Verify if `value` is a non-array object
   */
  is.object = is.obj = BulkCheck(value => value && Object.getPrototypeOf(value).isPrototypeOf({}))

  /**
   * * **is.Object | is.Obj** - Verify if `value` is a Object type
   */
  is.Object = is.Obj = BulkCheck(value => typeof value == 'object')

  /**
   * * **is.element | is.elem** - Verify if `value` is a Node Element type
   */
  is.element = is.elem = BulkCheck(value => value && value.nodeType)

  /**
   * * **is.element | is.elem** - Verify if `value` is a decimal value
   */
  is.decimal = BulkCheck(value => is.num(value) && value % 1 != 0)

  /**
   * * **is.array | is.arr** - Verify if `value` is a array
   */
  is.array = is.arr = BulkCheck(Array.isArray || (value => value.toString() === '[object Array]'))

  /**
   * * **is.infinite - Verify if `value` is a infinite number
   */
  is.infinite = BulkCheck(value => value === Infinity || value === -Infinity)

  /**
   * * **is.regexp - Verify if `value` is a RegExp type
   */
  is.regexp = BulkCheck(value => value.toString().includes('RegExp'))

  /**
   * * **is.defined | is.def** - Verify if `value` is defined
   */
  is.defined = is.def = BulkCheck(value => {
    if (!is.Obj(value)) return typeof value !== 'undefined';
    return !!Object.entries(value)[0]
  })

  return is
})
