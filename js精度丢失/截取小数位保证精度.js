function add(num1, num2){
  var len1 = num1.toString().split('.')[1].length
  var len2 = num1.toString().split('.')[1].length
  var multiple = Math.pow(10, Math.max(len1, len2))
  return (num1*multiple + num2*multiple)/multiple
}