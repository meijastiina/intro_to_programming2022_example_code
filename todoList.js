// Create a class task
class Task {
    // Private field name
    #name;
    // Name is always required for new tasks
    constructor( name ) {
        this.#name = name;
    }
    // Getter for name
    getName() {
        return this.#name;
    }
}
// Create a todolist class
class ToDoList {
    // Private field tasks (array of Task objects)
    #tasks;
    // Methods
    // Constructor initializes an empty array
    constructor() {
        this.#tasks = new Array();
    }
    // Add a new item into the list ( array )
    // Input parameter is a task object that is added to the list
    addTask(task) {
        this.#tasks.push(task);
    }
    // Prints all the todolist items
    printList() {
        // Loop through the array
        for ( let i = 0; i < this.#tasks.length; i++ ) {
            // Print the name 
            process.stdout.write("\n- " + this.#tasks[i].getName());
        }
    }
}

/****************** FUNCTIONALITY  ****************/
let todoList = new ToDoList();
let newTask = new Task("test task");
todoList.addTask(newTask);
// Print menu
process.stdout.write("\n1 - Add task");
process.stdout.write("\n2 - Remove task");
process.stdout.write("\n3 - Print List");
process.stdout.write("\n0 - Quit\n");
// Read user input
process.stdin.on( "data", function( inputFromUser ) {
    let choice = inputFromUser;
    // Check if user input is 1 (add)
    if ( choice == 1 ) {
        // Ask for new task name
        process.stdout.write("Task name: ");
        // Read user input (task name)
        process.stdin.on( "data", function( inputFromUser ) {
            let newTaskName = inputFromUser;
            // Create a new task object
            let newTask = new Task(newTaskName);
            // Add task to todolist
            todoList.addTask(newTask);
            process.exit();
        });
    } else if ( choice == 2) {
        // If user input is 2 (remove)
    } else if ( choice == 3 ) {
        // If user input is 3 (print)
        todoList.printList();
    } else if ( choice == 0 ) {
        // If user enter 0 (quit)
        process.exit();
    }
});   