function deepClone(target){
  var result = null;
  if(typeof target == 'object'){
    if(Array.isArray(target)){  // 数组
      result = []
      for(let i=0; i<target.length; i++){
        result.push(deepClone(target[i]))
      }
    } else if(target.constructor === RegExp || target === null){ // 正则或者null
      return target
    } else {  // 普通对象
      result = {}
      for(let i in target){
        result[i] = deepClone(target[i])
      }
    }
  } else{
    return target
  }
  return result
}