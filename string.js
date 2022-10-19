process.stdout.write("Enter something: ");
process.stdin.on( "data", function( inputFromUser ){
    process.stdout.write("User entered: " + inputFromUser.toString().trimEnd().toUpperCase() + "(user input ends here)");
})

let string1 = "test";
let string2 = "Test";
if ( string1.toLowerCase() == string2.toLowerCase() ) {
    process.stdout.write("Strings are equal");
} else {
    process.stdout.write("Strings are not equal");
}