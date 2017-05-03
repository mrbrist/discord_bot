const chalk = require('chalk');
module.exports = client => {
  client.user.setUsername('Dickbott');
  console.log(chalk.green(`Connected as ${client.user.username}`));
};
