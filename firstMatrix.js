// Create a new multidimensional array
let allJumpers = [
    ["James Johnson", 12.4, 1],
    ["John Johnson", 15.4, 1]
]
// Print out all jumper names
for ( let i = 0; i < allJumpers.length; i++) {
    process.stdout.write("\n" + allJumpers[i][0] + ": " + allJumpers[i][1]);
}

// Create a new multidimensional array
let jumps = [
    ['Mike Powell', 8.95,8.22, 8, 7.55],
    ['BobBeamon', 8.9, 'x'],
    ['Carl Lewis', 8.87,8.24, 'x'],
    ['Carl Lewis', 8.87,8.24, 'x'],
    ['Carl Lewis', 8.87,8.24, 'x'],
    ['Carl Lewis', 8.87,8.24, 'x', 7, 7.54]
    ['Carl Lewis', 8.87,8.24, 'x', 7, 7.54]
];
// Remove the last item of the array
jumps.pop();
// Print out the contents of the array
console.table(jumps);

// Print out all jumper data
// Outer loop is for looping rows
for ( let i = 0; i < jumps.length; i++) {
    process.stdout.write("\n");
    // Inner loop is for looping columns for current row
    for ( let j = 0; j < jumps[i].length; j++) {
        process.stdout.write("\t" + jumps[i][j]);
    }
}