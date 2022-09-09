// Create a simple game in which the user has to guess the secret number. Game has the following
// functionality:
// 1. Program asks the user to enter a number.
process.stdout.write("Please enter a number: ");
// Read the input given by the user and store it in a variable
process.stdin.on( "data", function( inputFromUser ){
    // The statements below will be executed automatically after
    // the user has typed in something.
    let enteredNumber = Number(inputFromUser);

    // 2. Set secret number to be entered number plus one.
    let secretNumber = enteredNumber + 1;
    // 3. Print out whether the user won or not.
    process.stdout.write("\nYou entered: " + enteredNumber);
    process.stdout.write("\nMy number was: " + secretNumber);
    process.stdout.write("\nSorry you lost.");
    process.exit();
});


