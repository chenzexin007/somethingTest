function myNew(Fun, ...args){
  let obj = {}
  obj.__proto__ = Fun.prototype
  let result = Fun.apply(obj, args)
  return result instanceof Object ? result : obj
}