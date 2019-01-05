function dropElements(arr, func) {
  // Drop them elements.
  if (arr.findIndex(func)>= 0){
  return arr.slice(arr.findIndex(func),)
} else {
  return []
}
}

dropElements([1, 2, 3], function(n) {return n > 0;})
