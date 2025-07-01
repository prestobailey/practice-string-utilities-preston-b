const stringUtils = require('./stringUtils');

console.log("capitalize");
console.log(stringUtils.capitalize("testing"));   
console.log(stringUtils.capitalize(""));        
console.log(stringUtils.capitalize(undefined)); 

console.log("reverse");
console.log(stringUtils.reverse("testing"));   
console.log(stringUtils.reverse(""));          
console.log(stringUtils.reverse(undefined));    

console.log("contains");
console.log(stringUtils.contains("testing", "hey"));  
console.log(stringUtils.contains("testing", "abc"));  
console.log(stringUtils.contains("", "e"));         
console.log(stringUtils.contains(undefined, "e"));   