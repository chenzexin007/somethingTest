Function.prototype.myCall = function(){
  let [thisArg, ...args] = arguments
  thisArg.fun = this
  let result = thisArg.fun(...args)
  delete thisArg.fun
  return result
}