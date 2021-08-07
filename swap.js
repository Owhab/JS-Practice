var a = 5;
var b = 6;

console.log(a, b);

var temp = a;
a = b; 
b = temp;
console.log(a, b);

[a, b] = [b, a];
console.log(a, b);