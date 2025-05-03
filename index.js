function greet(name = "World") {
    console.log(`Hello, ${name}! - v2`);
    return `Hello, ${name}!`;
}

module.exports = { greet };
