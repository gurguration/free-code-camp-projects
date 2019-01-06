
function palindrome(str) {
  const re = /[\(: /\- )\|.\_,]/g
  const strcleaned = (str.replace(re,''))
  if(strcleaned.toLowerCase() === strcleaned.split('').reverse().join('').toLowerCase()) {
    return 'palindrome'
  }
  return null;
}
