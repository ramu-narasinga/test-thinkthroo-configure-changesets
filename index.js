function greet(name = "World") {
    console.log(`Hello, ${name}! - v1`);
    return `Hello, ${name}!`;
}

module.exports = { greet };
