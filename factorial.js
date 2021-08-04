var factorialValue = 1;
function factorial(number){
    for(var i = 1; i <= number; i++){

        factorialValue = factorialValue * i;
        
    }
    console.log("Factorial of ",number, "is: ", factorialValue);
}

factorial(6);