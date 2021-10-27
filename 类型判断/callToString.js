/**
 * 利用Object.prototype.toString().call()可以解析出任何类型
 * 但是会得到 [object object]  [object Array]  等不是我们想要的字符串，
 * 所以需要使用 str.replace(/^\[object (\S+)\]$/, '$1') 
 * 将匹配到的所有内容替换成$1， 也就是正则中第一个括号里面的内容
 * 
 * 
 */
function myCallToString(target){
  let type = typeof target
  if(type !== 'object'){
    return type
  }
  return Object.prototype.toString.call(target).replace(/^\[object (\S+)\]$/, '$1')
}