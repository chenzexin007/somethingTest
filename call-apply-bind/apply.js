Function.prototype.myApply = function(){
  let [thisArg,args] = arguments
  thisArg.fun = this
  let result = null
  if(args instanceof Array){
    result = thisArg.fun(...args)
  }else {
    result = thisArg.fun()
  }
  delete thisArg.fun
  return result
}