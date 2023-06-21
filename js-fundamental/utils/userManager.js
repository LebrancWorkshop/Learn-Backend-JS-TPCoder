const { users, userStatus } = require('../data/user');
const { timeout } = require('../config/config');
const sleep = require('node:util').promisify(setTimeout);

// Callback Function
function getUsers(callback) {
  setTimeout(() => {
    callback(users);
  }, timeout.ONE_SECOND);
}

function getUserById(id) {
  return users.find(user => user.id === id);
}

function getUsersWithStatus(users, callback) {
  const statusMap = new Map();
  userStatus.forEach((status) => {
    statusMap.set(status.id, status.status);
  })
  const usersWithStatus = users.map((user) => {
    return {
      ...user,
      status: statusMap.get(user.status)
    }
  })
  setTimeout(() => {
    callback(usersWithStatus);
  }, timeout.ONE_SECOND);
}


// Promise Function
function getUsersPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users);
    }, timeout.ONE_SECOND)
  });
}

function getUsersWithStatusPromise(users) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const statusMap = new Map();
      userStatus.forEach((status) => {
        statusMap.set(status.id, status.status);
      })
      const usersWithStatus = users.map((user) => {
        return {
          ...user,
          status: statusMap.get(user.status)
        }
      })
      resolve(usersWithStatus);
    }, timeout.ONE_SECOND)
  });
}

// Async Function
async function getUsersAsync() {
  await sleep(timeout.ONE_SECOND);
  return users;
}

async function getUsersWithStatusAsync(users) {
  const statusMap = new Map();
  userStatus.forEach((status) => {
    statusMap.set(status.id, status.status);
  });
  const usersWithStatus = users.map((user) => {
    return { ...users, status: statusMap.get(user.status)};
  });
  await sleep(timeout.ONE_SECOND);
  return usersWithStatus;
}

module.exports = {
  getUsers,
  getUserById,
  getUsersWithStatus,
  getUsersPromise,
  getUsersWithStatusPromise,
  getUsersAsync,
  getUsersWithStatusAsync
};
