function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  p2 = Math.PI * 2
  const res = []
  //return arr;
  const objPeriod = (obj) => {
    const height = Math.pow(earthRadius + obj.avgAlt, 3)/GM
    const sqr = Math.sqrt(height) * p2
    const orbperiod = Math.round(sqr)
    delete obj.avgAlt
    obj['orbitalPeriod'] = orbperiod
    return obj
  }
  for (let obj in arr){
    res.push(objPeriod(arr[obj]))
  }
  return res
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
