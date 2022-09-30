function highestAndLowest(numbers) {
    // Let's first assume the first item is the highest and later compare to this
    let highest = numbers[0];
    let lowest = numbers[0];
    for ( let i = 1; i < numbers.length; i++ ) {
        // If current number is higher than the highest
        if (numbers[i] > highest) {
            // Set highest to be the current number
            highest = numbers[i];
        }
        if (numbers[i] < lowest ) {
            // Set lowest to be the current number
            lowest = numbers[i];
        }
    }
    process.stdout.write(highest + " is the highest and " + lowest + " is the lowest");
}
function highestAndLowest2(numbers) {
    // Let's first assume the first item is the highest and later compare to this
    let highest = Math.max(...numbers);
    let lowest = Math.min(...numbers);

    process.stdout.write(highest + " is the highest and " + lowest + " is the lowest");
}
function compareNumbers(a, b) {
    return a - b;
}
function highestAndLowest3(numbers) {
    // Let's first sort the array
    numbers.sort(compareNumbers);
    let highest = numbers[numbers.length-1];
    let lowest = numbers[0];

    process.stdout.write(highest + " is the highest and " + lowest + " is the lowest");
}
let numbers = [455, 22, 4, 6, 0, -9];
highestAndLowest(numbers);
process.stdout.write("\n*******************************\n");
highestAndLowest2(numbers);
process.stdout.write("\n*******************************\n");
let numbers2 = [4, 8, 11, 7, 2, 0, 9, 12];
highestAndLowest3(numbers2);