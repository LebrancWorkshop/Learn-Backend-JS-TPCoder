import chalk from 'chalk';

function log(message) {
  console.log(chalk.green(message));
}

function warn(message) {
  console.log(chalk.yellow(message));
}

function error(message) {
  console.log(chalk.red(message));
}

export {
  log,
  warn,
  error
};
