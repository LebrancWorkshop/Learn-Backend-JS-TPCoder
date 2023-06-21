const { users } = require('./data/user.js');
const { getUsers, getUserById, getUsersWithStatus } = require('./utils/userManager.js');
const { getUsersPromise, getUsersWithStatusPromise } = require('./utils/userManager.js');
const { getUsersAsync, getUsersWithStatusAsync } = require('./utils/userManager.js');

// Callback
const processCallbackLabel = 'Process (Callback)';
console.time(processCallbackLabel);
getUsers((users) => {
  getUsersWithStatus(users, (userWithStatus) => {
    console.log('===== Section 01: Callback =====');
    console.log(userWithStatus);
    console.timeEnd(processCallbackLabel);
    console.log('==========');
  })
});

// Promise (Resolve, Reject)
const processPromiseLabel = 'Process (Promise)';
console.time(processPromiseLabel);
getUsersPromise()
.then((users) => getUsersWithStatusPromise(users))
.then((usersWithStatus) => {
    console.log('===== Section 02: Promise =====');
    console.log(usersWithStatus);
    console.timeEnd(processPromiseLabel);
    console.log('==========');
  })

// Async/Await
const processAsyncLabel = 'Process (Async / Await)';
async function processAsync() {
  console.time(processAsyncLabel);
  const users = await getUsersAsync();
  const usersWithStatus = await getUsersWithStatusAsync(users);
  console.log('===== Section 03: Async / Await =====');
  console.log(usersWithStatus);
  console.timeEnd(processAsyncLabel);
  console.log('==========');
}
processAsync();
