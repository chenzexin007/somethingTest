function toKLH(fn){
  let allArgs = []  // 参数收集
  let length = fn.length  // fn的参数个数
  return function core(){
    let args = [].slice.call(arguments)
    allArgs = allArgs.concat(args)
    length -= args.length
    return length === 0 ? fn(...allArgs) : core
  }
}