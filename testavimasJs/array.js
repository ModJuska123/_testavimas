//creating array with numbers

const numbers = [1, 2, 3, 4, 5];

console.log(numbers[0]);

numbers.push(6); 
console.log(numbers);


//function that calaculates the sum of an array

function sumArray(numbers1) {
    let sum = 0;
    for (let number of numbers1) {
        sum += number;
    }
    return sum;
}
const numbers1 = [1, 2, 3, 4, 5];

const result = sumArray(numbers1);
console.log(result);