/**
 * instanceof: 用来判断构造函数的prototype属性是否出现在该实例对象的原型链上
 * eg. car instanceof Car
 * 返回布尔值
 * 且只能判断引用类型，不能判断基本数据类型
 */
function MyInstanceof(left, right){
  // typeof只能判断基本类型，在引用类型方面只能判断Function， 其他一律返回object以及null也会返回object
  if(typeof left !== 'object' || left === null){
    return false
  }
  let proto = Object.getPrototypeOf(left)
  while(true){
    if(proto === null)  return false
    if(proto === right.prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
}
