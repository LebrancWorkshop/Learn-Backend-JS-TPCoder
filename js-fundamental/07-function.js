// Function Declaration.

// Function Expression.

function getHelloWorld() {
  return "Hello World";
}

function createCharacter(name, race, job) {
  return {
    name,
    race,
    job
  }
}

console.log(getHelloWorld());
console.log(createCharacter('Sugus', 'Golden Elf', 'White Mage'));

function bestConcat(...args) {
  return args.join(' ');
}



console.log(bestConcat('Hello', 'World'));
