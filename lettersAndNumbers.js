// 5.1 Task 1 Letters and Numbers
// Create a program with two methods:
// 1. printLetters(): prints letters from a-z
function printLetters() {
    // Let's loop from 1 to 9
    for( let i = 10; i < 36; i++ ) {
        process.stdout.write(i.toString(36));
    }
}
// 2. printNumbers(): prints numbers from 1-9
function printNumbers() {
    // Let's loop from 1 to 9
    for( let i = 1; i <= 9; i++ ) {
        process.stdout.write(i.toString());
    }
}
// Call first printLetters() method, 
printLetters();
process.stdout.write("\n");
// then printNumbers() 
printNumbers();
process.stdout.write("\n");
// and after that printLetters() again.
printLetters();
// Hint! To print the letters you can use for example Number toString() (https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)
