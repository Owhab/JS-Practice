

function factorial(number){
    factorialValue = 1;

    var i = number;
    while(i >= 1){

        factorialValue = factorialValue * i;
        i--;

    }
    console.log(factorialValue);
}

factorial(6);

