const chalk = require('chalk');
module.exports = client => {
  console.log(chalk.green(`Connected as ${client.user.username}`));
};
