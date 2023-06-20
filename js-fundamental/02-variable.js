const user1 = {
  name: 'John',
  school: 'Babson College'
};


const keyName = 'name';
console.log(user1.name); // John
console.log(user1.keyName); // undefined
console.log(user1['name']); // John
console.log(user1[keyName]); // John
