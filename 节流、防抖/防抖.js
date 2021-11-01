/**
 * 等待wait时间后，执行函数
 * 若期间再次调用函数，清空之前的计时，重新计时
 */
function fangdou(fn, wait){
  let timer = null
  return function(...arg){
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(null, arg)
      timer = null
    }, wait)
  } 
}