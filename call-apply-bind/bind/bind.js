/**
 *  function fn(a,b,c){ return this.age+a+b+c }
 *  var obj = { age: 3 }
 *  fn.bind(obj)(1,2,3)
 *  运用柯里化函数实现+call/apply实现的合并思想
 */

Function.prototype.myBind = function(){
  let length = this.length  // fn的参数个数
  let allArgs = []
  let [bindThis, ...args1] = arguments
  allArgs = allArgs.concat(args1)
  length -= args1.length
  bindThis.fun = this
  return function core(){
    let args2 = [].slice.call(arguments)
    allArgs = allArgs.concat(args2)
    length -= args2.length
    let result = null
    if(length === 0){
      result = bindThis.fun(...allArgs)
      delete bindThis.fun
    }else {
      result =  core
    }
    return result
  } 
}