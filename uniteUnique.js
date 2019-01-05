ction uniteUnique(arr) {
  narr = Array.apply(null, arguments)
  farr = []
  let big = []
  //console.log(narr)
  narr.map((el)=>{
    el.forEach(item => big.push(item))
  })
  big.forEach((i) => {
    if (farr.indexOf(i)=== -1){
      farr.push(i)
    }
  })
  return farr
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
