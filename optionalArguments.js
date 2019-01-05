function addTogether() {
  const arg1 = arguments[0];
  for (let i=0; i < arguments.length; i++){
    if(!Number.isInteger(arguments[i])|| !Number.isInteger(arg1)){
      return undefined
    }
  }
  if (arguments.length === 2){
    return arguments[0]+arguments[1]
  }
  else{
    function newfunc(newarg){
      if(!Number.isInteger(newarg)){
        return undefined
      }else{
      return newarg + arg1
      }
    }
    return newfunc
  }
}

addTogether(2)(4);



