function fearNotLetter(str) {
  let code = []
  for (let i=0; i < str.length-1; i++){
    console.log(str.charCodeAt(i+1), str.charCodeAt(i)+1)
   if (str.charCodeAt(i)+1 != str.charCodeAt(i+1)){
   const charcode =  str.charCodeAt(i)+1;
   return String.fromCharCode(charcode)
  }
}
}

fearNotLetter("azbce");
