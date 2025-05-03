function greet(name = "World") {
    console.log(`Hello, ${name}!`);
    return `Hello, ${name}!`;
}

module.exports = { greet };
