// Ask the user to enter their name
process.stdout.write("\nPlease enter your name:\n");
// Receive input from user
process.stdin.on( "data", function( inputFromUser ){
    // Store input in a variable
    let givenName = inputFromUser;
    // Create a variable for the loop
    let i = 1;
    // Create loop that does five iterations
    while ( i <= 5 ) {
        // Print out given name
        process.stdout.write(i + ". " + givenName);
        // Increment the iterator variable
        i++;
    }
    // Terminate the process
    process.exit();
});