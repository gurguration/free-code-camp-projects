function whatIsInAName(collection, source) {
 // What's in a name?
 var arr = [];
 let temparr = [];
 //console.log(collection[0]['first'])
 // Only change code below this line
 arr = collection.filter((item) => {
     //console.log(item.hasOwnProperty('a'))
   for (let i in source){
     //console.log(i)
     if (!item.hasOwnProperty(i)){
       console.log('hasnt')
       return false
     }else if(item[i] != source[i]){
       return false
     }
   }
     temparr.push(item)
     
   
   })
 arr = temparr 
 
 //const srckeys = Object.keys(source)
 //console.log(srckeys)

 
 // Only change code above this line
 return arr;
}
