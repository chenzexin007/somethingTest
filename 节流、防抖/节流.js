/**
 * wait时间后执行函数
 */
function jieliu(fn, wait){
  let timer = null
  return function(...arg){
    if(!timer){
      timer = setTimeout(() => {
        fn.apply(null, arg)
        timer = null
      }, wait)
    }
  }
}