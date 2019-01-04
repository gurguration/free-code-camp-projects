function translatePigLatin(str) {
 ender = (string,match1,match2,offset,e) => {
   return match2+match1+'ay'
   
 }
 if(str.match(/^[aeiou]/)){
 return str+'way'
 }else {
   const nstr = str.replace(/([^aeiou]+)(.*)/, ender)
   return nstr
 }
}

translatePigLatin("california");
