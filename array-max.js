

var largest = 0;

function findTheLargest(numbers){

    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];

        if(element > largest){
            largest = element;
        }
        
    }
    console.log("Largest number is: ", largest);
}

var arr = [25, 35, 24, 12, 28, 29, 99, 100];

findTheLargest(arr)