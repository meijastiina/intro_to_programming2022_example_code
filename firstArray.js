// Create a JS array that has the following items: "banana", "apple", "kiwi", "orange".
let fruits = ["watermelon", "banana", "apple", "kiwi", "orange"];
// Print out "First item in the array is [first item]".
process.stdout.write("First item in the array is " + fruits[0]);
// Loop through the array and print out the items.
for ( let i = 0; i < fruits.length; i++ ){
    process.stdout.write("\n" + fruits[i]);
}
process.stdout.write("\n--Array backwards--");
// Loop through the array backwards and print out the items.
for ( let i = fruits.length - 1; i >= 0; i-- ){
    process.stdout.write("\n" + fruits[i]);
}

// Add a new element grapefruit in the beginning of the array.
fruits.unshift("grapefruit");
process.stdout.write("\n--Grapefruit added--")
// Loop through the array and print out the items.
for ( let i = 0; i < fruits.length; i++ ){
    process.stdout.write("\n" + fruits[i]);
}
// Add a new element watermelon in the end of the array.
fruits.push("watermelon");
process.stdout.write("\n--Watermelon added--")
// Loop through the array and print out the items.
for ( let i = 0; i < fruits.length; i++ ){
    process.stdout.write("\n" + fruits[i]);
}
// Sort the array in descending alphabetical order (z-a).
fruits.sort();
fruits.reverse();
process.stdout.write("\n--Array sorted--")
// Loop through the array and print out the items.
for ( let i = 0; i < fruits.length; i++ ){
    process.stdout.write("\n" + fruits[i]);
}
