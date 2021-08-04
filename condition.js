var bangla = 71;
var english = 60;
var math = 45;
science = 65;
var totalMarks = bangla + english + math + science;
console.log("Total Mark is: " + totalMarks);

if(totalMarks >= 320){
    console.log("Congrats! You have got A+");
}
else if(totalMarks >=280 ){
    console.log("Your have got A Grade");
}
else if(totalMarks >= 240){
    console.log("You have got A-");
}
else if(totalMarks >= 200){
    console.log("You have to improve your study.");
}
else if(totalMarks >= 132){
    console.log("Your marks is so poor.");
}
else{
    console.log("You have failed. Try next time.");
}