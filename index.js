// Function to prompt the user for their name
function askForName() {
    return prompt("What is your name?");
}

// Function to generate a random age between min and max (inclusive)
function generateRandomAge(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to display a random greeting message
function displayRandomGreeting() {
    var greetings = ["Hello", "Hi", "Greetings", "Hey"];
    var randomIndex = Math.floor(Math.random() * greetings.length);
    return greetings[randomIndex];
}

// Function to display a greeting message with the user's name and age
function displayGreeting(name, age) {
    alert(displayRandomGreeting() + ", " + name + "! You are " + age + " years old. Welcome.");
}

// Function to handle when the user doesn't provide a name or age
function displayGenericGreeting() {
    alert(displayRandomGreeting() + "! Welcome.");
}

// Main function to orchestrate the interaction
function main() {
    var name = askForName();

    if (name !== null && name !== "") {
        var age = generateRandomAge(18, 80); // Generating random age between 18 and 80

        displayGreeting(name, age);
    } else {
        displayGenericGreeting();
    }
}

// Call the main function to start the interaction
main();
