var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let __fullname = firstAndLast.split(' ');

  this.setFullName = function(full){
    __fullname = full.split(' ')
  }

  this.getFirstName = function() {
    return __fullname[0]
  }
  
  this.getLastName = function() {
    return __fullname[1]
  }
  
  this.getFullName = function() {
    return __fullname.join(' ')
  }
  
  this.setFirstName = function(first) {
    __fullname[0] = first
  }
  
  this.setLastName = function(last) {
    __fullname[1] = last
  }
  


};


var bob = new Person('Bob Ross');
//bob.getFullName();
//bob.getFirstName();
//Object.keys(bob).length;
bob.setFullName("Haskell Curry")
bob.getFirstName()
