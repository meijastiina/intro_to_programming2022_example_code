// Create a JS array that has the following items: "banana", "apple", "kiwi", "orange".
let fruits = ["watermelon", "banana", "apple", "kiwi", "orange"];
// Print out "First item in the array is [first item]".
process.stdout.write("First item in the array is " + fruits[0]);
// Loop through the array and print out the items.
for ( let i = 0; i < fruits.length; i++ ){
    process.stdout.write("\n" + fruits[i]);
}
// Loop through the array backwards and print out the items.
for ( let i = fruits.length - 1; i >= 0; i-- ){
    process.stdout.write("\n" + fruits[i]);
}