function rot13(str) { // LBH QVQ VG!
    let charcode = []
    const arr = str.split('')
    // console.log(arr)
    let offset;
    arr.forEach((item) => {
      if(/[A-Z]/.test(item)){
        if(item.charCodeAt()-13 < 65){
          charcode.push(String.fromCharCode(item.charCodeAt()+13))
        }
        else{
        charcode.push(String.fromCharCode(item.charCodeAt()-13))
      }
      }else{
        charcode.push(item)
      }
      return charcode
    })

    return charcode.join('')
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
console.log(rot13("SERR PBQR PNZC"))

