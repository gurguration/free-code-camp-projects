  let flatarr = []
  
  if(!Array.isArray(arr)){
    return arr
  }else{
     flatarr = arr.reduce((accumulator, current)=> {
        return accumulator.concat(steamrollArray(current))
    },[])
    
  }
  return flatarr
  
  
  //return steamrollArray(narr)
}
steamrollArray([1, [2], [3, [[4]]]]);
