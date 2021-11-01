function memoize(fun, content){
  content = content || this
  const catchData = Object.create(null)
  return (...key) => {
    if(catchData[key]){
      return catchData[key]
    }else {
      return fun.apply(content, key)
    }
  }
}